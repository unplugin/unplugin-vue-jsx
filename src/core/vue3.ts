import { transform } from '@babel/core'
import vue3Jsx from '@vue/babel-plugin-jsx'
// @ts-expect-error
import TS from '@babel/plugin-syntax-typescript'
import { isTS } from './utils'
import type { TransformOptions } from '@babel/core'
import type { OptionsResolved } from './options'

export const transformVue3 = (
  code: string,
  id: string,
  options: OptionsResolved
) => {
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
