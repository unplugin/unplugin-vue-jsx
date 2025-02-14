import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { createFilter } from 'unplugin-utils'
import { resolveOptions, type Options } from './core/options'

const VueJsx: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (userOptions = {}) => {
    const options = resolveOptions(userOptions)
    const filter = createFilter(options.include, options.exclude)

    return {
      name: 'unplugin-vue-jsx',

      transformInclude(id) {
        return filter(id)
      },

      async transform(code, id) {
        let result: { code: string; map: any } | undefined
        if (options.version === 2) {
          // Vue 2
          const { transformVue2 } = await import('./core/vue2')
          result = transformVue2(code, id, options)
        } else {
          // Vue 3
          const { transformVue3 } = await import('./core/vue3')
          result = transformVue3(code, id, options)
        }

        if (!result?.code) return
        return {
          code: result.code,
          map: result.map as any,
        }
      },

      vite: {
        configResolved(config) {
          userOptions.root = config.root
          userOptions.sourceMap =
            config.command === 'serve' || !!config.build.sourcemap
        },
      },
    }
  },
)
export default VueJsx
