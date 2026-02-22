import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ppt1/', // 👈 告訴機器人，我們的網頁住在這個子路徑下
})
