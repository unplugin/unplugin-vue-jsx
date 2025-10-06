import { RequireCJS } from 'rolldown-plugin-require-cjs'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/*.ts'],
  exports: true,
  inlineOnly: [],
  plugins: [RequireCJS()],
})
