import { describe, expect, test } from 'vitest'
import { resolveOption } from '../src/core/options'
import { transformVue2 } from '../src/core/vue2'

const transform = async (code: string) => {
  const options = await resolveOption({ version: 2 })
  return (await transformVue2(code, 'foo.tsx', options))?.code
}

describe('Vue 2', async () => {
  test('basic', async () => {
    expect(await transform('<div />')).toMatchSnapshot()
    expect(await transform('<div key="1" />')).toMatchSnapshot()
    expect(await transform("<div foo={'bar'} />")).toMatchSnapshot()
  })

  test('typescript', async () => {
    expect(await transform('const foo: any = <div />')).toMatchSnapshot()
  })
})
