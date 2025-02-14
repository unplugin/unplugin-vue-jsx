/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import Starter from 'unplugin-vue-jsx/webpack'
 *
 * default export {
 *  plugins: [Starter()],
 * }
 * ```
 */
const webpack = VueJsx.webpack as typeof VueJsx.webpack
export default webpack
export { webpack as 'module.exports' }
