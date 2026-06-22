/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 * import VueJsx from 'unplugin-vue-jsx/esbuild'
 * 
 * build({ plugins: [VueJsx()] })
```
 */
const esbuild = VueJsx.esbuild as typeof VueJsx.esbuild
export default esbuild
export { esbuild as 'module.exports' }
