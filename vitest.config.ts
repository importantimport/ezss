// eslint-disable-next-line n/no-unpublished-import
import tsconfigPaths from 'vite-tsconfig-paths'
// eslint-disable-next-line n/no-unpublished-import
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    threads: false,
  },
})
