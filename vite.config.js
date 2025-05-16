import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:6000', // <-- Your ASP.NET backend
        changeOrigin: true,
        secure: false, // because you're probably using a self-signed HTTPS cert locally
      }
    }
  }
})
