import { transform, type TransformOptions } from '@babel/core'
import BabelVueJsx from '@vue/babel-plugin-jsx'
import type { OptionsResolved } from './options'

function isTS(id: string): boolean {
  return /\.[cm]?tsx?$/.test(id)
}

export function transformVueJsx(
  code: string,
  id: string,
  options: Omit<OptionsResolved, 'include' | 'exclude'>,
): { code: string; map: any } | undefined {
  const tsSyntax = isTS(id)

  const transformOptions: TransformOptions = {
    babelrc: false,
    configFile: false,
    plugins: [[BabelVueJsx, options], ...options.babelPlugins],
    sourceMaps: options.sourceMap,
    sourceFileName: id,
    parserOpts: {
      ...options.parserOpts,
      plugins: [
        ...(tsSyntax ? (['typescript', 'jsx'] as const) : []),
        ...(options.parserOpts?.plugins || []),
      ],
    },
  }

  const result = transform(code, transformOptions)
  if (!result?.code) return

  return {
    code: result.code,
    map: result.map,
  }
}
