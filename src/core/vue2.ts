import { transform } from '@babel/core'
// @ts-expect-error
import TS from '@babel/plugin-syntax-typescript'
// @ts-expect-error
import vue2Jsx from '@vue/babel-preset-jsx'
import { isTS } from './utils'
import type { TransformOptions } from '@babel/core'
import type { OptionsResolved } from './options'

export const transformVue2 = async (
  code: string,
  id: string,
  options: OptionsResolved
) => {
  const transformOptions: TransformOptions = {
    babelrc: false,
    configFile: false,
    plugins: [],
    presets: [[vue2Jsx, options]],
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
