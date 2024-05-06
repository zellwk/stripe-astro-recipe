import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.my-site.dev',

  vite: {
    ssr: { noExternal: ['@splendidlabs/astro'] },
  },
})
