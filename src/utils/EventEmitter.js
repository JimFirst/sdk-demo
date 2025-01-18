class EventEmitter {
  constructor() {
    this.events = {}
  }
  // TODO: callback 组件更新，callback 引用变化，可能会重复注册
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    if (this.events[eventName].includes(callback)) return
    this.events[eventName].push(callback)
  }
  // 没有指定 callback 则清空所有回调
  off(eventName, callback) {
    if (!this.events[eventName]) return
    if (!callback) {
      this.events[eventName] = []
      return
    }
    this.events[eventName] = this.events[eventName].filter(
      cb => cb !== callback,
    )
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return

    this.events[eventName].forEach(callback => {
      callback(...args)
    })
  }

  // 只执行一次的订阅
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}
export default EventEmitter
