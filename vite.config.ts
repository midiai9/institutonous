import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base '/' — served at domain root on Plesk (institutonous.org.br)
export default defineConfig({
  plugins: [react()],
})
