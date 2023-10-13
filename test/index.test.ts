// eslint-disable-next-line n/no-unpublished-import
import { describe, expect, test } from 'vitest'

import * as ezss from '~/index'

describe('ezss', () => {
  test('export EncryptionService', () => {
    expect(ezss.EncryptionService).toBeDefined()
  })
  test('export getFingerprint', () => {
    expect(ezss.getFingerprint).toBeDefined()
  })
})
