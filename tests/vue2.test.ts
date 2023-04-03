import { describe, expect, test } from 'vitest'
import { resolveOption } from '../src/core/options'
import { transformVue2 } from '../src/core/vue2'
import type { Options } from '../src/core/options'

const transform = async (code: string, userOptions: Options = {}) => {
  const options = await resolveOption({
    version: 2,
    ...userOptions,
  })
  return (await transformVue2(code, 'foo.tsx', options))?.code
}

describe('Vue 2', () => {
  test('basic', async () => {
    expect(await transform('<div />')).toMatchSnapshot()
    expect(await transform('<div key="1" />')).toMatchSnapshot()
    expect(await transform("<div foo={'bar'} />")).toMatchSnapshot()
  })

  test('typescript', async () => {
    expect(await transform('const foo: any = <div />')).toMatchSnapshot()
  })

  test('custom options', async () => {
    expect(
      await transform(`<input vModel={refa} />`, {
        version: 2,
        vModel: false,
      })
    ).toMatchSnapshot()
    expect(
      await transform(`<input vModel={refa} />`, {
        version: 2,
        vModel: true,
      })
    ).toMatchSnapshot()
  })
})
