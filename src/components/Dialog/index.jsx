import styles from './index.module.css'
export default function Dialog({ visible, children }) {
  return visible && <div className={styles.dialog}>{children}</div>
}
