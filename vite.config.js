import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolioAzarudheenQA/', // Must match the repo name
  plugins: [react()],
})
