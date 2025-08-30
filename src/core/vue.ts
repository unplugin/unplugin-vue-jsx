import { transform, type TransformOptions } from '@babel/core'
// @ts-expect-error
import TS from '@babel/plugin-syntax-typescript'
import vue3Jsx from '@vue/babel-plugin-jsx'
import type { OptionsResolved } from './options'

function isTS(id: string): boolean {
  return /\.[cm]?tsx?$/.test(id)
}

export function transformVueJsx(
  code: string,
  id: string,
  options: Omit<OptionsResolved, 'include' | 'exclude'>,
): { code: string; map: any } | undefined {
  const transformOptions: TransformOptions = {
    babelrc: false,
    configFile: false,
    plugins: [[vue3Jsx, options]],
    sourceMaps: options.sourceMap,
    sourceFileName: id,
  }

  if (isTS(id)) {
    transformOptions.plugins!.push([TS, { isTSX: true }])
  }

  const result = transform(code, transformOptions)
  if (!result?.code) return

  return {
    code: result.code,
    map: result.map,
  }
}
