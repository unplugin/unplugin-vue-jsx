/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.js
 * import Starter from 'unplugin-vue-jsx/farm'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
const farm = VueJsx.farm as typeof VueJsx.farm
export default farm
export { farm as 'module.exports' }
