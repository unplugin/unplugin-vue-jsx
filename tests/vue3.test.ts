import { describe, expect, test } from 'vitest'
import { resolveOption } from '../src/core/options'
import { transformVue3 } from '../src/core/vue3'

const transform = async (code: string, isTS = false) => {
  const options = await resolveOption({ version: 3 })
  return (await transformVue3(code, `foo.${isTS ? 'tsx' : 'jsx'}`, options))
    ?.code
}

describe('Vue 3', async () => {
  test('basic', async () => {
    expect(await transform('<div />')).toMatchSnapshot()
    expect(await transform('<div key="1" />')).toMatchSnapshot()
    expect(await transform("<div foo={'bar'} />")).toMatchSnapshot()
  })

  test('typescript', async () => {
    expect(await transform('const foo: any = <div />', true)).toMatchSnapshot()
  })
})
