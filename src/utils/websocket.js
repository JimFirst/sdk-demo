// Import websocket from npm package
import { w3cwebsocket as W3CWebSocket } from 'websocket'

class BrowserWebSocket {
  constructor(url, options = {}) {
    this.url = url
    this.reconnectInterval = options.reconnectInterval || 5000 // 重连间隔
    this.heartbeatInterval = options.heartbeatInterval || 30000 // 心跳间隔
    this.heartbeatMessage = options.heartbeatMessage || 'ping' // 心跳消息
    this.maxReconnectAttempts = options.maxReconnectAttempts || 10 // 最大重连次数
    this.reconnectAttempts = 0
    this.client = null
    this.heartbeatTimer = null
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
      if (message.data === 'pong') {
        console.log('Heartbeat acknowledged')
      } else {
        this.onMessage(message.data) // 自定义消息处理函数
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
      console.error('Maximum reconnect attempts reached. Giving up.')
      return
    }
    this.reconnectAttempts += 1
    setTimeout(() => {
      console.log(`Reconnecting... Attempt ${this.reconnectAttempts}`)
      this.connect()
    }, this.reconnectInterval)
  }

  send(message) {
    if (this.client && this.client.readyState === this.client.OPEN) {
      this.client.send(message)
      console.log('Message sent:', message)
    } else {
      console.warn('WebSocket is not connected. Cannot send message.')
    }
  }

  startHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
    }
    this.heartbeatTimer = setInterval(() => {
      if (this.client && this.client.readyState === this.client.OPEN) {
        this.client.send(this.heartbeatMessage)
        console.log('Heartbeat sent:', this.heartbeatMessage)
      }
    }, this.heartbeatInterval)
  }

  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  onMessage(message) {
    // Custom message handler
    console.log('Custom message handler:', message)
  }

  close() {
    this.stopHeartbeat()
    if (this.client) {
      this.client.close()
    }
  }
}

// Usage
const ws = new BrowserWebSocket('ws://example.com/socket', {
  reconnectInterval: 5000,
  heartbeatInterval: 30000,
  heartbeatMessage: 'ping',
  maxReconnectAttempts: 5,
})

ws.connect()

// Example to send a message
setTimeout(() => {
  ws.send('Hello WebSocket!')
}, 2000)
