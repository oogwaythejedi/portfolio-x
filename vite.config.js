import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio-x/', // GitHub Pages project site: https://oogwaythejedi.github.io/portfolio-x/
  plugins: [tailwindcss()],
})
