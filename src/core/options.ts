import process from 'node:process'
import { getPackageInfo } from 'local-pkg'
import type { VueJSXPluginOptions } from '@vue/babel-plugin-jsx'
import type { FilterPattern } from '@rollup/pluginutils'

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

export type OptionsResolved = Omit<Required<Options>, 'version'> & {
  version: 2 | 3
}

export async function resolveOption(
  options: Options,
): Promise<OptionsResolved> {
  const root = options.root || process.cwd()
  let version: 2 | 3
  if (options.version === 'auto') {
    version = await getVueVersion(root)
  } else version = options.version || 3

  return {
    ...options,
    include: options.include || [/\.[jt]sx?$/],
    exclude: options.exclude || undefined,
    version,
    root,
    sourceMap: options.sourceMap ?? true,
  }
}

async function getVueVersion(root: string) {
  const pkg = await getPackageInfo('vue', { paths: [root] })
  if (!pkg) return 3
  return pkg.version?.startsWith('2') ? 2 : 3
}
