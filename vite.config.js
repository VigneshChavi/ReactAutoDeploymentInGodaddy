// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if you're using React

export default defineConfig({
  plugins: [react()],
  // base: '/', // Use '/' for custom domain
})
