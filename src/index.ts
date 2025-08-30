import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { createFilter } from 'unplugin-utils'
import { resolveOptions, type Options } from './core/options'
import { transformVueJsx } from './core/vue'

const VueJsx: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (userOptions = {}) => {
    const options = resolveOptions(userOptions)
    const filter = createFilter(options.include, options.exclude)

    return {
      name: 'unplugin-vue-jsx',
      enforce: options.enforce,

      transformInclude(id) {
        return filter(id)
      },

      transform(code, id) {
        const result = transformVueJsx(code, id, options)
        if (!result?.code) return
        return {
          code: result.code,
          map: result.map as any,
        }
      },
    }
  },
)
export default VueJsx
