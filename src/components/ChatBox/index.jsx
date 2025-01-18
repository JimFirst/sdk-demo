import { Button, Space, Upload, Input } from 'antd'
import EmoticonPicker from './EmoticonPicker'
import { useState } from 'react'
import styles from './index.module.css'
import QuoteBox from '../QuoteBox'
import useWs from '@/hooks/useWs'
export default function ChatBox({
  style = {},
  className = '',
  quote,
  setQuote,
  multile,
  setMultile,
  multileChecked = [],
  setMultileChecked,
  chatViewRef,
  messages,
  setMessages,
}) {
  const [value, setValue] = useState('')

  function onEmotionPick(item) {
    setValue(
      value + String.fromCodePoint(parseInt(item.code.replace('U+', ''), 16)),
    )
  }
  // const ws = useWs('/channel/chat/1')
  function onSend() {
    if (value.trim() === '') return
    setQuote(null)
    const message = {
      type: 'chat',
      receiver: '2',
      content: value.trim(),
      id: new Date().getTime(),
    }
    // ws.send(message)
    setMessages([...messages, message])
    setValue('')
    setTimeout(() => {
      chatViewRef.current?.scrollToBottom()
    }, 0)
  }
  function cancleMultile() {
    setMultile(false)
    setMultileChecked([])
  }
  function transpond() {
    setMultile(false)
    console.log(multileChecked)
    // setMultileChecked([])
  }
  return multile ? (
    <div
      className={
        className ? `${styles.multileBox} ${className}` : styles.multileBox
      }
    >
      <Space>
        <div onClick={transpond}>转发</div>
        <div onClick={cancleMultile}>取消</div>
      </Space>
    </div>
  ) : (
    <div
      className={className ? `${styles.chatBox} ${className}` : styles.chatBox}
      style={style}
    >
      <div>
        <Input.TextArea
          value={value}
          autoSize={{ minRows: 2, maxRows: 4 }}
          onChange={e => setValue(e.target.value)}
          placeholder="请输入..."
        />
        <QuoteBox data={quote} setData={setQuote} />
      </div>
      <div className={styles.sup}>
        <div>
          <Space>
            <EmoticonPicker onPick={onEmotionPick} />
            <Upload>文件上传</Upload>
          </Space>
        </div>
        <Button onClick={onSend}>发送</Button>
      </div>
    </div>
  )
}
