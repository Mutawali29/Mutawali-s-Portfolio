import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mutawali-portfolio/"
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tsparticles': path.resolve(__dirname, './node_modules/tsparticles'),
    },
  },
})
