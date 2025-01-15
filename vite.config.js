import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-tasks-proyect/',
  build: {
    // Esto asegura que Vite maneje correctamente los archivos CSS
    cssCodeSplit: true
  }
})
