/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 * import Starter from 'unplugin-vue-jsx/esbuild'
 * 
 * build({ plugins: [Starter()] })
```
 */
const esbuild = VueJsx.esbuild as typeof VueJsx.esbuild
export default esbuild
export { esbuild as 'module.exports' }
