/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import Starter from 'unplugin-vue-jsx/rolldown'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
const rolldown = VueJsx.rolldown as typeof VueJsx.rolldown
export default rolldown
export { rolldown as 'module.exports' }
