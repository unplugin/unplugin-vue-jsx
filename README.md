# unplugin-vue-jsx [![npm](https://img.shields.io/npm/v/unplugin-vue-jsx.svg)](https://npmjs.com/package/unplugin-vue-jsx)

[![Unit Test](https://github.com/sxzz/unplugin-vue-jsx/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/unplugin-vue-jsx/actions/workflows/unit-test.yml)

- Vue JSX plugin for both Vue 2 and 3.
- Supports Rollup, Vite, esbuild and Webpack.

## Installation

```bash
npm i unplugin-vue-jsx
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import VueJsx from 'unplugin-vue-jsx/vite'

export default defineConfig({
  plugins: [VueJsx()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import VueJsx from 'unplugin-vue-jsx/rollup'

export default {
  plugins: [VueJsx()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-vue-jsx/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-vue-jsx/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-vue-jsx/webpack')()],
  },
}
```

<br></details>

## Configuration

The following show the default values of the configuration.

```ts
VueJsx({
  // filters for transforming targets
  include: [/\.[jt]sx?$/],
  exclude: undefined,

  root: process.cwd(),
  sourceMap: true,

  /** detect vue version from node_modules automatically */
  version: 'auto',

  // extra options from babel plugin
  // Vue 2 options: https://github.com/vuejs/jsx-vue2/tree/dev/packages/babel-preset-jsx#usage
  // Vue 3 options: https://github.com/vuejs/babel-plugin-jsx#options
})
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [三咲智子](https://github.com/sxzz)
