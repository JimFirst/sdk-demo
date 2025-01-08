import Message from './Message'
import { useState } from 'react'
import styles from './index.module.css'
import { useContextMenu } from 'react-contexify'
const MENU_ID = 'rightMenu'
// interface Message {
//   id: number
//   text: string
//   type: <string, file, image>
//   time: string
//   quato: Message
//   user: {
//     name: string
//     avatar: string
//   }
// }
export default function ChatView({ style = {}, className = '' }) {
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
  ])
  const { show } = useContextMenu({
    id: MENU_ID,
  })
  function handleContextMenu(event, message) {
    show({
      event,
      props: {
        ...message,
      },
    })
  }
  return (
    <>
      <div
        style={{ ...style, overflow: 'auto' }}
        className={className ? `${styles.box} ${className}` : styles.box}
      >
        {messages.map(message => {
          return (
            <Message
              key={message.id}
              message={message}
              isReverse={message.user.name === 'Bob'}
              onContextMenu={event => handleContextMenu(event, message)}
            />
          )
        })}
      </div>
    </>
  )
}
