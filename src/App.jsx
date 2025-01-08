import '@/assets/styles/init.css'
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from '@ant-design/cssinjs'
import Chat from './Chat'

export default function App() {
  return (
    <StyleProvider
      hashPriority="high"
      transformers={[legacyLogicalPropertiesTransformer]}
    >
      <Chat />
    </StyleProvider>
  )
}
