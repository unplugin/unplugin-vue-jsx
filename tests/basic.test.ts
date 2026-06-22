import BabelTS from '@babel/plugin-syntax-typescript'
import { describe, expect, test } from 'vitest'
import { resolveOptions, type Options } from '../src/core/options'
import { transformVueJsx } from '../src/core/vue'

async function transform(
  code: string,
  isTS = false,
  userOptions: Options = {},
) {
  const options = resolveOptions(userOptions)
  return (await transformVueJsx(code, `foo.${isTS ? 'tsx' : 'jsx'}`, options))
    ?.code
}

describe('Vue 3', () => {
  test('basic', async () => {
    expect(await transform('<div />')).toMatchSnapshot()
    expect(await transform('<div key="1" />')).toMatchSnapshot()
    expect(await transform("<div foo={'bar'} />")).toMatchSnapshot()
  })

  test('typescript', async () => {
    expect(await transform('const foo: any = <div />', true)).toMatchSnapshot()
  })

  test('custom options', async () => {
    expect(
      await transform(`<input on={{ click: a }} />`, false, {
        transformOn: false,
      }),
    ).toMatchSnapshot()
    expect(
      await transform(`<input on={{ click: a }} />`, false, {
        transformOn: true,
      }),
    ).toMatchSnapshot()
  })

  test('custom parser plugins', async () => {
    expect(
      await transform(`@x class X {}; const x = <div />`, false, {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      }),
    ).toMatchSnapshot()

    expect(
      await transform(`@x class X {}; const x: string = <div />`, true, {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      }),
    ).toMatchSnapshot()
  })

  test('custom babel plugins', async () => {
    expect(
      await transform(`const x: string = <div />`, true, {
        babelPlugins: [[BabelTS, { isTSX: true }]],
      }),
    ).toMatchSnapshot()
  })
})
