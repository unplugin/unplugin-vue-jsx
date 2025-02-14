import {
  createUnplugin,
  type UnpluginInstance,
  type UnpluginOptions,
} from 'unplugin'
import { createFilter } from 'unplugin-utils'
import {
  resolveOption,
  type Options,
  type OptionsResolved,
} from './core/options'

const VueJsx: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (userOptions = {}) => {
    let options: OptionsResolved
    let filter: (id: unknown) => boolean

    const name = 'unplugin-vue-jsx'
    const factory: UnpluginOptions = {
      name,

      async buildStart() {
        options = await resolveOption(userOptions)
        filter = createFilter(options.include, options.exclude)
      },

      transformInclude(id) {
        return filter(id)
      },

      async transform(code, id) {
        let result: { code: string; map: any } | undefined
        if (options.version === 2) {
          // Vue 2
          const { transformVue2 } = await import('./core/vue2')
          result = await transformVue2(code, id, options)
        } else {
          // Vue 3
          const { transformVue3 } = await import('./core/vue3')
          result = await transformVue3(code, id, options)
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

    return factory
  },
)
export default VueJsx
