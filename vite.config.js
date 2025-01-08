import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // 启动时自动打开浏览器
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
    },
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
