
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  // Path Absolute
  resolve: {
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@assets', replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@components', replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts')
      },
      {
        find: '@pages', replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@router', replacement: path.resolve(__dirname, 'src/router')
      },
      {
        find: '@views', replacement: path.resolve(__dirname, 'src/views')
      }
    ]
  },

  plugins: [react()]

})
