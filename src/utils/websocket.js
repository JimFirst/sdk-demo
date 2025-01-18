// Import websocket from npm package
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import EventEmitter from './EventEmitter'
const baseUrl = 'ws://10.199.248.176:9997'
class BrowserWebSocket {
  constructor(url, options = {}) {
    this.url = baseUrl + url
    this.reconnectInterval = options.reconnectInterval || 5000 // 重连间隔
    this.heartbeatInterval = options.heartbeatInterval || 30000 // 心跳间隔
    this.heartbeatMessage = options.heartbeatMessage || 'ping' // 心跳消息
    this.maxReconnectAttempts = options.maxReconnectAttempts || 10 // 最大重连次数
    this.reconnectAttempts = 0
    this.client = null
    this.heartbeatTimer = null
    this.eventEmitter = new EventEmitter()
  }

  connect() {
    console.log('Connecting to WebSocket server...')
    this.client = new W3CWebSocket(this.url)

    // Handle open event
    this.client.onopen = () => {
      console.log('WebSocket connected!')
      this.reconnectAttempts = 0 // 重置重连次数
      this.startHeartbeat() // 开始心跳
    }

    // Handle message event
    this.client.onmessage = message => {
      console.log('Message received:', message.data)
      const data = JSON.parse(message.data)
      if (data.type === 'pong') {
        console.log('Heartbeat acknowledged')
      } else {
        this.eventEmitter.emit(data.type, data) // 触发订阅
      }
    }

    // Handle close event
    this.client.onclose = () => {
      console.warn('WebSocket closed. Attempting to reconnect...')
      this.stopHeartbeat()
      this.reconnect()
    }

    // Handle error event
    this.client.onerror = error => {
      console.error('WebSocket error:', error)
      this.stopHeartbeat()
      this.reconnect()
    }
  }

  reconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('超过最大重连次数，放弃重连')
      return
    }
    this.reconnectAttempts += 1
    setTimeout(() => {
      console.log(`第${this.reconnectAttempts}次重连`)
      this.connect()
    }, this.reconnectInterval)
  }

  send(message) {
    if (this.client && this.client.readyState === this.client.OPEN) {
      this.client.send(JSON.stringify(message))
    } else {
      // TODO: 处理发送失败的情况
      console.warn('WebSocket is not connected. Cannot send message.')
    }
  }
  subscribe(type, onMessage) {
    this.eventEmitter.on(type, onMessage)
  }

  unsubscribe(type, onMessage) {
    this.eventEmitter.off(type, onMessage)
  }
  startHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
    }
    this.heartbeatTimer = setInterval(() => {
      if (this.client && this.client.readyState === this.client.OPEN) {
        this.client.send({ type: this.heartbeatMessage })
      }
    }, this.heartbeatInterval)
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  close() {
    this.stopHeartbeat()
    if (this.client) {
      this.client.close()
    }
  }
}

export default BrowserWebSocket
