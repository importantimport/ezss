// eslint-disable-next-line n/no-unpublished-import
import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  entry: ['src/index.ts'],
  format: 'esm',
  minify: true,
  treeshake: true,
})
