import { describe, expect, test } from 'vitest'
import { resolveOptions, type Options } from '../src/core/options'
import { transformVueJsx } from '../src/core/vue'

function transform(code: string, isTS = false, userOptions: Options = {}) {
  const options = resolveOptions(userOptions)
  return transformVueJsx(code, `foo.${isTS ? 'tsx' : 'jsx'}`, options)?.code
}

describe('Vue 3', () => {
  test('basic', () => {
    expect(transform('<div />')).toMatchSnapshot()
    expect(transform('<div key="1" />')).toMatchSnapshot()
    expect(transform("<div foo={'bar'} />")).toMatchSnapshot()
  })

  test('typescript', () => {
    expect(transform('const foo: any = <div />', true)).toMatchSnapshot()
  })

  test('custom options', () => {
    expect(
      transform(`<input on={{ click: a }} />`, false, {
        transformOn: false,
      }),
    ).toMatchSnapshot()
    expect(
      transform(`<input on={{ click: a }} />`, false, {
        transformOn: true,
      }),
    ).toMatchSnapshot()
  })

  test.only('custom parser plugins', () => {
    expect(
      transform(`@x class X {}; const x = <div />`, false, {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      }),
    ).toMatchSnapshot()

    expect(
      transform(`@x class X {}; const x: string = <div />`, true, {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      }),
    ).toMatchSnapshot()
  })
})
