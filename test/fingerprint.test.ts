// eslint-disable-next-line n/no-unpublished-import
import { describe, expect, test } from 'vitest'

import { getFingerprint } from '~/index'

describe('ezss.getFingerprint', () => {
  test('getFingerprint', () => {
    const fingerprint = getFingerprint()
    console.log('fingerprint:', fingerprint)
    expect(fingerprint).toBeDefined()
  })
})
