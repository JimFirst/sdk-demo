import Message from './Message'
import styles from './index.module.css'
import { useContextMenu } from 'react-contexify'
import { Checkbox, Watermark } from 'antd'
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
export default function ChatView({
  multile = false,
  multileChecked = [],
  setMultileChecked,
  messages = [],
  menuId,
  style = {},
  className = '',
}) {
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
  return (
    <div
      style={{ ...style, overflow: 'auto' }}
      className={className ? `${styles.box} ${className}` : styles.box}
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
