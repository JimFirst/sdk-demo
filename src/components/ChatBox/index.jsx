import { Button, Space, Upload, Input } from 'antd'
import EmoticonPicker from './EmoticonPicker'
import { useState } from 'react'
import styles from './index.module.css'
import QuoteBox from '../QuoteBox'
export default function ChatBox({
  style = {},
  className = '',
  quote,
  setQuote,
  multile,
  setMultile,
  multileChecked = [],
  setMultileChecked,
}) {
  const [value, setValue] = useState('')

  function onEmotionPick(item) {
    setValue(
      value + String.fromCodePoint(parseInt(item.code.replace('U+', ''), 16)),
    )
  }

  function onSend() {
    if (value.trim() === '') return
    console.log(value)
    setQuote(null)
    setValue('')
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
