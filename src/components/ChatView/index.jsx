import Message from './Message'
import styles from './index.module.css'
import { useContextMenu } from 'react-contexify'
import { Checkbox, Watermark } from 'antd'
import { forwardRef, useImperativeHandle, useRef } from 'react'
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
function ChatView(
  {
    multile = false,
    multileChecked = [],
    setMultileChecked,
    messages = [],
    menuId,
    style = {},
    className = '',
  },
  ref,
) {
  const { show } = useContextMenu({
    id: menuId,
  })
  function handleContextMenu(event, message) {
    if (multile) return
    show({
      event,
      props: {
        ...message,
      },
    })
  }
  useImperativeHandle(ref, () => {
    return {
      scrollToBottom,
    }
  })
  const chatRef = useRef(null)
  function scrollToBottom() {
    const element = chatRef.current
    if (element) {
      element.scrollTo(0, element.scrollHeight)
    }
  }

  return (
    <div
      style={{ ...style, overflow: 'auto' }}
      className={className ? `${styles.box} ${className}` : styles.box}
      ref={chatRef}
    >
      <Watermark content="天健">
        <Checkbox.Group
          value={multileChecked}
          onChange={setMultileChecked}
          style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 'initial',
          }}
        >
          {messages.map(message => {
            return (
              <div key={message.id} className={styles.messageLine}>
                {multile && <Checkbox value={message.id}></Checkbox>}
                <Message
                  message={message}
                  isReverse={message.user?.name === 'Bob'}
                  onContextMenu={event => handleContextMenu(event, message)}
                  style={{ flex: 1 }}
                />
              </div>
            )
          })}
        </Checkbox.Group>
      </Watermark>
    </div>
  )
}
export default forwardRef(ChatView)
