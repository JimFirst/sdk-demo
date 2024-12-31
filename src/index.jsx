import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  init()
}
function init(options = {}) {
  let dom
  if (!document.getElementById('customerService')) {
    dom = document.createElement('div')
    dom.id = 'customerService'
    document.body.appendChild(dom)
  }
  const root = createRoot(dom)
  root.render(React.createElement(App, options))
}
// 挂载到全局 window 对象
if (typeof window !== 'undefined') {
  window.MySDK = {
    init,
  }
}

export { init }
