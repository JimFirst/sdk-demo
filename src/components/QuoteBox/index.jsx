import styles from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'
export default function QuoteBox({ data, setData }) {
  return (
    data && (
      <div className={styles.quote}>
        <div>
          <span>{data.user.name}:</span>
          <span>{data.content}</span>
        </div>
        {setData && <CloseOutlined onClick={() => setData(null)} />}
      </div>
    )
  )
}
