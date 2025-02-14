/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import Starter from 'unplugin-vue-jsx/rspack'
 *
 * default export {
 *  plugins: [Starter()],
 * }
 * ```
 */
const rspack = VueJsx.rspack as typeof VueJsx.rspack
export default rspack
export { rspack as 'module.exports' }
