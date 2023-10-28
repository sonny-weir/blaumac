import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    extensions: ['.js','.jsx','.mjs','.ts', '.tsx','.vue', '.json']

  },
  base: './'
})
