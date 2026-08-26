import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dataRoomAuthPlugin } from './lib/vite-plugin-data-room-auth.js'

export default defineConfig({
  plugins: [dataRoomAuthPlugin(), react()],
  server: {
    port: 5173,
    open: true
  }
})



