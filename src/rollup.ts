/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import Starter from 'unplugin-vue-jsx/rollup'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
const rollup = VueJsx.rollup as typeof VueJsx.rollup
export default rollup
export { rollup as 'module.exports' }
