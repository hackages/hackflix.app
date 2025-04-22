// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  //@ts-expect-error not sure why you are not happy with it today
  test: {
    environment: "jsdom",
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
})
