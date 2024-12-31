import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // 启动时自动打开浏览器
  },
  build: {
    outDir: 'build', // 构建输出目录
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
})
