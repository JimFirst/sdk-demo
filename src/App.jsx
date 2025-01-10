import '@/assets/styles/init.css'
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from '@ant-design/cssinjs'
import Chat from './Chat'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

export default function App() {
  return (
    <ConfigProvider locale={zhCN} prefixCls="tj">
      <StyleProvider
        hashPriority="high"
        transformers={[legacyLogicalPropertiesTransformer]}
      >
        <Chat />
      </StyleProvider>
    </ConfigProvider>
  )
}
