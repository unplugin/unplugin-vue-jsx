import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { resolveOptions, type Options } from './core/options'
import { transformVueJsx } from './core/vue'

const VueJsx: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (userOptions = {}) => {
    const { include, exclude, enforce, ...options } =
      resolveOptions(userOptions)

    return {
      name: 'unplugin-vue-jsx',
      enforce,

      transform: {
        filter: {
          id: { include, exclude },
        },
        async handler(code, id) {
          const result = await transformVueJsx(code, id, options)
          if (!result) return
          return {
            code: result.code,
            map: result.map,
          }
        },
      },
    }
  },
)
export default VueJsx
