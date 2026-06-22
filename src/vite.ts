/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import { VueJsx } from './index.ts'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import VueJsx from 'unplugin-vue-jsx/vite'
 *
 * export default defineConfig({
 *   plugins: [VueJsx()],
 * })
 * ```
 */
const vite = VueJsx.vite as typeof VueJsx.vite
export default vite
export { vite as 'module.exports' }
