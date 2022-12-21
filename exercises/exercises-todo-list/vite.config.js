
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],

  resolve: {
    alias: [
      {
        find: '@', replacement: path.join(__dirname, 'src')
      },
      {
        find: '@assets', replacement: path.join(__dirname, 'src/assets')
      },
      {
        find: '@router', replacement: path.join(__dirname, 'src/router')
      },
      {
        find: '@components', replacement: path.join(__dirname, 'src/components')
      },
      {
        find: '@views', replacement: path.join(__dirname, 'src/views')
      }
    ]
  }

})
