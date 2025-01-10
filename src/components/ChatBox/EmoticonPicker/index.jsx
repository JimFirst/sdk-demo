import { Tooltip } from 'antd'
import defaultEmojiIconGroup from './data'
import { useState, useEffect } from 'react'
const DefaultEmoticonBox = ({ onPick }) => {
  return (
    <div>
      {defaultEmojiIconGroup.map(item => {
        return (
          <Tooltip title={item.name} key={item.id}>
            <span
              onClick={() => onPick && onPick(item)}
              style={{ cursor: 'pointer', fontSize: 18 }}
            >
              {String.fromCodePoint(parseInt(item.code.replace('U+', ''), 16))}
            </span>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default function EmoticonPicker({ onPick }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    // 点击空白处隐藏选择框
    const handleClickOutside = event => {
      const dom = document.getElementById('emoticon-picker')
      if (visible && dom && !dom.contains(event.target)) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible])

  function onEmotiPick(item) {
    setVisible(false)
    onPick && onPick(item)
  }
  return (
    <Tooltip
      title={<DefaultEmoticonBox onPick={onEmotiPick} />}
      trigger="click"
      color="white"
      open={visible}
      id="emoticon-picker"
    >
      <span onClick={() => setVisible(!visible)} style={{ cursor: 'pointer' }}>
        表情包
      </span>
    </Tooltip>
  )
}
