# unplugin-vue-jsx

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Unit Test][unit-test-src]][unit-test-href]

- Vue JSX plugin for Vue 3.
- Supports Rollup, Rolldown, Vite, esbuild, Webpack and more.

## Installation

```bash
npm i -D unplugin-vue-jsx
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Starter from 'unplugin-vue-jsx/vite'

export default defineConfig({
  plugins: [Starter()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Starter from 'unplugin-vue-jsx/rollup'

export default {
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>Rolldown</summary><br>

```ts
// rolldown.config.js
import Starter from 'unplugin-vue-jsx/rolldown'

export default {
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
import { build } from 'esbuild'
import Starter from 'unplugin-vue-jsx/esbuild'

build({
  plugins: [Starter()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
import Starter from 'unplugin-vue-jsx/webpack'

export default {
  /* ... */
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
import Starter from 'unplugin-vue-jsx/rspack'

export default {
  /* ... */
  plugins: [Starter()],
}
```

<br></details>

## Configuration

The following show the default values of the configuration.

```ts
VueJsx({
  // filters for transforming targets
  include: [/\.[jt]sx$/],
  exclude: [/node_modules/],
  sourceMap: true,

  // See https://babeljs.io/docs/babel-parser#options
  parserOpts: {
    plugins: [
      /* ... */
    ],
  },

  // Use extra babel plugins
  babelPlugins: [],

  // Extra options from Vue Babel plugin: https://github.com/vuejs/babel-plugin-jsx#options
  // ...
})
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/unplugin-vue-jsx.svg
[npm-version-href]: https://npmjs.com/package/unplugin-vue-jsx
[npm-downloads-src]: https://img.shields.io/npm/dm/unplugin-vue-jsx
[npm-downloads-href]: https://www.npmcharts.com/compare/unplugin-vue-jsx?interval=30
[unit-test-src]: https://github.com/unplugin/unplugin-vue-jsx/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/unplugin/unplugin-vue-jsx/actions/workflows/unit-test.yml
