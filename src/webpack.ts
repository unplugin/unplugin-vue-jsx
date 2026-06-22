/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import VueJsx from 'unplugin-vue-jsx/webpack'
 *
 * export default {
 *   plugins: [VueJsx()],
 * }
 * ```
 */
const webpack = VueJsx.webpack as typeof VueJsx.webpack
export default webpack
export { webpack as 'module.exports' }
