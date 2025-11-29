import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typegpuPlugin from 'unplugin-typegpu/vite';
import tailwindcss from '@tailwindcss/vite'
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),typegpuPlugin({}), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
