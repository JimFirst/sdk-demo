import styles from './message.module.css'
import QuoteBox from '../QuoteBox'
import { Image, Rate } from 'antd'
const BaseMessage = ({ message = {}, onContextMenu, children, quote }) => {
  const { user } = message
  return (
    <>
      <div className={styles.messageUser}>
        <img className={styles.avatar} src={user?.avatar} />
      </div>
      <div className={styles.messageContent} onContextMenu={onContextMenu}>
        {children}
        <QuoteBox data={quote} />
      </div>
    </>
  )
}
const TextMessage = ({ message, onContextMenu, quote }) => {
  return (
    <BaseMessage onContextMenu={onContextMenu} message={message} quote={quote}>
      <div className={styles.messageText}>{message.content}</div>
    </BaseMessage>
  )
}
const ImageMessage = ({ message, onContextMenu, quote }) => {
  return (
    <BaseMessage onContextMenu={onContextMenu} message={message} quote={quote}>
      <Image width={200} src={message.content} />
    </BaseMessage>
  )
}
const FileMessage = ({ message, onContextMenu, quote }) => {
  return (
    <BaseMessage onContextMenu={onContextMenu} message={message} quote={quote}>
      <div className={styles.messageText}>
        <a
          href={message.content}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          下载文件
        </a>
      </div>
    </BaseMessage>
  )
}
const VideoMessage = ({ message, onContextMenu, quote }) => {
  return (
    <BaseMessage onContextMenu={onContextMenu} message={message} quote={quote}>
      <video src={message.content} controls></video>
    </BaseMessage>
  )
}
const RateMessage = ({ message }) => {
  return (
    <div className={styles.messageRate}>
      <Rate></Rate>
    </div>
  )
}
export default function Message({
  message,
  isReverse,
  onContextMenu,
  style = {},
}) {
  const { quote } = message
  // TODO：支持图片、文件、视频等消息类型
  function getMessageContent(message) {
    switch (message.type) {
      case 'text':
        return (
          <TextMessage
            message={message}
            onContextMenu={onContextMenu}
            quote={quote}
          />
        )
      case 'image':
        return (
          <ImageMessage
            message={message}
            onContextMenu={onContextMenu}
            quote={quote}
          />
        )
      case 'file':
        return (
          <FileMessage
            message={message}
            onContextMenu={onContextMenu}
            quote={quote}
          />
        )
      case 'video':
        return (
          <VideoMessage
            message={message}
            onContextMenu={onContextMenu}
            quote={quote}
          />
        )
      case 'rate':
        return <RateMessage message={message} />
      default:
        return (
          <TextMessage
            message={message}
            onContextMenu={onContextMenu}
            quote={quote}
          />
        )
    }
  }
  return (
    <div
      className={styles.message}
      style={{ flexDirection: isReverse ? 'row-reverse' : 'row', ...style }}
    >
      {getMessageContent(message)}
    </div>
  )
}
