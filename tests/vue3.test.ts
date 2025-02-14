import { describe, expect, test } from 'vitest'
import { resolveOptions, type Options } from '../src/core/options'
import { transformVue3 } from '../src/core/vue3'

const transform = async (
  code: string,
  isTS = false,
  userOptions: Options = {},
) => {
  const options = await resolveOptions({
    version: 3,
    ...userOptions,
  })
  return (await transformVue3(code, `foo.${isTS ? 'tsx' : 'jsx'}`, options))
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
        version: 3,
        transformOn: false,
      }),
    ).toMatchSnapshot()
    expect(
      await transform(`<input on={{ click: a }} />`, false, {
        version: 3,
        transformOn: true,
      }),
    ).toMatchSnapshot()
  })
})
