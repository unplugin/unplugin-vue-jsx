import process from 'node:process'
import { getPackageInfoSync } from 'local-pkg'
import type { VueJSXPluginOptions } from '@vue/babel-plugin-jsx'
import type { FilterPattern } from 'unplugin-utils'

export type Vue2JSXOptions = {
  functional?: boolean
  injectH?: boolean
  vModel?: boolean
  vOn?: boolean
  compositionAPI?: 'auto' | 'native' | 'plugin' | boolean | 'naruto'
}

export type Options = {
  include?: FilterPattern
  exclude?: FilterPattern | undefined
  root?: string
  sourceMap?: boolean
} & (OptionsVue2 | OptionsVue3 | { version?: 'auto' })

interface OptionsVue2 extends Vue2JSXOptions {
  version: 2
}

interface OptionsVue3 extends VueJSXPluginOptions {
  version: 3
}

export type OptionsResolved = Omit<Required<Options>, 'version' | 'exclude'> & {
  version: 2 | 3
  exclude?: Options['exclude']
}

export function resolveOptions(options: Options): OptionsResolved {
  const root = options.root || process.cwd()
  let version: 2 | 3
  if (options.version === 'auto') {
    version = getVueVersion(root)
  } else version = options.version || 3

  return {
    ...options,
    include: options.include || [/\.[jt]sx?$/],
    exclude: options.exclude || [/node_modules/],
    version,
    root,
    sourceMap: options.sourceMap ?? true,
  }
}

function getVueVersion(root: string) {
  const pkg = getPackageInfoSync('vue', { paths: [root] })
  return pkg?.version?.startsWith('2') ? 2 : 3
}
