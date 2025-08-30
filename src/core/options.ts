import type { ParserOptions, PluginItem } from '@babel/core'
import type { VueJSXPluginOptions } from '@vue/babel-plugin-jsx'
import type { FilterPattern } from 'unplugin'

export type Options = {
  include?: FilterPattern
  exclude?: FilterPattern | undefined
  enforce?: 'pre' | 'post' | undefined
  sourceMap?: boolean
  parserOpts?: ParserOptions
  babelPlugins?: PluginItem[]
} & VueJSXPluginOptions

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

export type OptionsResolved = Overwrite<
  Options,
  Pick<Required<Options>, 'include' | 'exclude' | 'sourceMap' | 'babelPlugins'>
>

export function resolveOptions(options: Options): OptionsResolved {
  return {
    babelPlugins: [],
    ...options,
    include: options.include || [/\.[jt]sx$/],
    exclude: options.exclude || [/node_modules/],
    sourceMap: options.sourceMap ?? true,
  }
}
