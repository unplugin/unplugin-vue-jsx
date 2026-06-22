/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import VueJsx from 'unplugin-vue-jsx/rspack'
 *
 * export default {
 *   plugins: [VueJsx()],
 * }
 * ```
 */
const rspack = VueJsx.rspack as typeof VueJsx.rspack
export default rspack
export { rspack as 'module.exports' }
