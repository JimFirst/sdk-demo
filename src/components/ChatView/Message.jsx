import styles from './message.module.css'
import QuoteBox from '../QuoteBox'
import { Image } from 'antd'
const TextMessage = ({ message, onContextMenu }) => {
  return (
    <div className={styles.messageText} onContextMenu={onContextMenu}>
      {message}
    </div>
  )
}
const ImageMessage = ({ message, onContextMenu }) => {
  return (
    <div onContextMenu={onContextMenu}>
      <Image width={200} src={message} />
    </div>
  )
}
const FileMessage = ({ message, onContextMenu }) => {
  return (
    <div className={styles.messageText} onContextMenu={onContextMenu}>
      <a href={message} download target="_blank" rel="noopener noreferrer">
        下载文件
      </a>
    </div>
  )
}
const VideoMessage = ({ message, onContextMenu }) => {
  return (
    <div className={styles.messageText} onContextMenu={onContextMenu}>
      <video src={message} controls></video>
    </div>
  )
}

export default function Message({ message, isReverse, onContextMenu }) {
  const { user, quote } = message
  // TODO：支持图片、文件、视频等消息类型
  function getMessageContent(message) {
    switch (message.type) {
      case 'text':
        return (
          <TextMessage message={message.text} onContextMenu={onContextMenu} />
        )
      case 'image':
        return (
          <ImageMessage message={message.text} onContextMenu={onContextMenu} />
        )
      case 'file':
        return (
          <FileMessage message={message.text} onContextMenu={onContextMenu} />
        )
      case 'video':
        return (
          <VideoMessage message={message.text} onContextMenu={onContextMenu} />
        )
      default:
        return (
          <TextMessage message={message.text} onContextMenu={onContextMenu} />
        )
    }
  }
  return (
    <div
      className={styles.message}
      style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}
    >
      <div className={styles.messageUser}>
        <img className={styles.avatar} src={user.avatar} />
      </div>
      <div className={styles.messageContent}>
        {getMessageContent(message)}
        <QuoteBox data={quote} />
      </div>
    </div>
  )
}
