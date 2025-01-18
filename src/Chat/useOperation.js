import { useState } from 'react'
import copy from 'copy-to-clipboard'

export default function useOperation() {
  const [visible, setVisible] = useState(false)
  function toggleVisible() {
    setVisible(!visible)
  }
  function copyMessage(e) {
    // TODO: 实现文件、图片复制功能
    copy(e.props.content)
  }
  const [quote, setQuote] = useState(null)
  function quoteMessage(e) {
    const { props } = e
    setQuote({ content: props.content, user: props.user })
    console.log('引用', e)
  }
  function revokeMessage(e) {
    console.log('撤回', e)
  }
  const [multile, setMultile] = useState(false)
  function multipleSelectMessage(e) {
    console.log('多选', e)
    setMultile(true)
    // TODO: 实现另存为功能，处理文件
  }
  return {
    toggleVisible,
    copyMessage,
    quoteMessage,
    revokeMessage,
    multipleSelectMessage,
    visible,
    quote,
    setQuote,
    multile,
    setMultile,
  }
}
