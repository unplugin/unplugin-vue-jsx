/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import VueJsx from 'unplugin-vue-jsx/rolldown'
 *
 * export default {
 *   plugins: [VueJsx()],
 * }
 * ```
 */
const rolldown = VueJsx.rolldown as typeof VueJsx.rolldown
export default rolldown
export { rolldown as 'module.exports' }
