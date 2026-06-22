/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import VueJsx from 'unplugin-vue-jsx/rollup'
 *
 * export default {
 *   plugins: [VueJsx()],
 * }
 * ```
 */
const rollup = VueJsx.rollup as typeof VueJsx.rollup
export default rollup
export { rollup as 'module.exports' }
