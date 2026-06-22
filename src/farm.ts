/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.js
 * import VueJsx from 'unplugin-vue-jsx/farm'
 *
 * export default {
 *   plugins: [VueJsx()],
 * }
 * ```
 */
const farm = VueJsx.farm as typeof VueJsx.farm
export default farm
export { farm as 'module.exports' }
