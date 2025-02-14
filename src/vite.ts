/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import VueJsx from './index'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Starter from 'unplugin-vue-jsx/vite'
 *
 * export default defineConfig({
 *   plugins: [Starter()],
 * })
 * ```
 */
const vite = VueJsx.vite as typeof VueJsx.vite
export default vite
export { vite as 'module.exports' }
