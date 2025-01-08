import { Dialog, ChatBox, ChatView } from '@/components'
import styles from './index.module.css'
import { useState } from 'react'
import { Button } from 'antd'
import 'react-contexify/dist/ReactContexify.css'
import { Menu, Item } from 'react-contexify'
const MENU_ID = 'rightMenu'
import copy from 'copy-to-clipboard'

export default function App() {
  const [visible, setVisible] = useState(false)
  function toggleVisible() {
    setVisible(!visible)
  }
  function copyMessage(e) {
    // TODO: 实现文件、图片复制功能
    copy(e.props.text)
  }
  const [quote, setQuote] = useState(null)
  function quoteMessage(e) {
    const { props } = e
    setQuote({ text: props.text, user: props.user })
    console.log('引用', e)
  }
  function revokeMessage(e) {
    console.log('撤回', e)
  }
  function saveMessage(e) {
    console.log('另存为', e)
    // TODO: 实现另存为功能，处理文件
  }
  return (
    <>
      <div className={styles.button}>
        <Button onClick={toggleVisible}>联系我</Button>
      </div>

      <Menu id={MENU_ID} animation="fade">
        <Item onClick={copyMessage}>复制</Item>
        <Item onClick={quoteMessage}>引用</Item>
        <Item onClick={revokeMessage}>撤回</Item>
        <Item onClick={saveMessage}>另存为</Item>
      </Menu>
      <Dialog visible={visible}>
        <div className={styles.container}>
          <ChatView style={{ flex: 1 }} />
          <ChatBox quote={quote} setQuote={setQuote} />
        </div>
      </Dialog>
    </>
  )
}
