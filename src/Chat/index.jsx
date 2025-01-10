import { Dialog, ChatBox, ChatView } from '@/components'
import styles from './index.module.css'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import 'react-contexify/dist/ReactContexify.css'
import { Menu, Item } from 'react-contexify'
const MENU_ID = 'rightMenu'
import useOperation from './useOperation'
export default function App() {
  useEffect(() => {
    getMessageContent()
  }, [])
  function getMessageContent() {}
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello, world!',
      user: {
        name: 'Alice',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      type: 'text',
      time: '2021-08-10 10:00:00',
      quote: {
        text: 'I am a quote. How are you? I am fine, thank you. And you?',
        user: {
          name: 'Bob',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      },
    },
    {
      id: 2,
      text: 'How are you? I am fine, thank you. And you?',
      type: 'text',
      time: '2021-08-10 10:00:00',
      user: {
        name: 'Bob',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    },
    {
      id: 3,
      text: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      type: 'file',
      time: '2021-08-10 10:00:00',
      user: {
        name: 'Alice',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    },
    {
      id: 4,
      text: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      type: 'image',
      time: '2021-08-10 10:00:00',
      user: {
        name: 'Alice',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    },
    {
      id: 5,
      text: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      type: 'image',
      time: '2021-08-10 10:00:00',
      user: {
        name: 'Bob',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    },
    {
      id: 6,
      text: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      type: 'rate',
      time: '2021-08-10 10:00:00',
    },
  ])
  const [multileChecked, setMultileChecked] = useState([])
  const {
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
  } = useOperation()
  return (
    <>
      <div className={styles.button}>
        <Button onClick={toggleVisible}>联系我</Button>
      </div>
      {/* 对话框窗口使用了fixed，会导致Menu定位出错，只能放外面 */}
      <Menu id={MENU_ID} animation="fade">
        <Item onClick={copyMessage}>复制</Item>
        <Item onClick={quoteMessage}>引用</Item>
        <Item onClick={revokeMessage}>撤回</Item>
        <Item onClick={multipleSelectMessage}>多选</Item>
      </Menu>
      <Dialog visible={visible}>
        <div
          className={styles.container}
          onContextMenu={e => e.preventDefault()}
        >
          <ChatView
            style={{ flex: 1 }}
            multile={multile}
            messages={messages}
            menuId={MENU_ID}
            multileChecked={multileChecked}
            setMultileChecked={setMultileChecked}
          />
          <ChatBox
            quote={quote}
            setQuote={setQuote}
            multile={multile}
            setMultile={setMultile}
            multileChecked={multileChecked}
            setMultileChecked={setMultileChecked}
          />
        </div>
      </Dialog>
    </>
  )
}
