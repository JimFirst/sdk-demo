import BrowserWebSocket from '@/utils/WebSocket'
const wsMap = new Map()
export default function useWs(path = '/channel/chat/1') {
  let ws
  if (wsMap.has(path)) {
    ws = wsMap.get(path)
  } else {
    const ws = new BrowserWebSocket(path, {
      reconnectInterval: 5000,
      heartbeatInterval: 30000,
      heartbeatMessage: 'ping',
      maxReconnectAttempts: 5,
    })
    wsMap.set(path, ws)
    ws.connect()
  }

  return {
    ws,
    send: (message, onMessage) => {
      ws.send(message)
      ws.subscribe(message.type, onMessage)
    },
    close: () => {
      ws.close()
    },
    subscribe: (type, onMessage) => {
      ws.subscribe(type, onMessage)
    },
    unsubscribe: (type, onMessage) => {
      ws.unsubscribe(type, onMessage)
    },
  }
}
