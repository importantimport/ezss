// eslint-disable-next-line n/no-unpublished-import
import { describe, expect, test } from 'vitest'

import { EncryptionService } from '~/index'

describe('ezss.EncryptionService', () => {
  test('encryption', () => {
    const encryption = new EncryptionService()
    const text = 'Hello World'
    const ciphertext = encryption.encrypt(text)
    const result = encryption.decrypt(ciphertext)
    expect(result).eq(text)
  })

  test('with keyPrefix', () => {
    const encryption = new EncryptionService({ keyPrefix: 'ezss' })
    const text = 'Hello World with keyPrefix'
    const ciphertext = encryption.encrypt(text)
    const result = encryption.decrypt(ciphertext)
    expect(result).eq(text)
  })

  test('with keySuffix', () => {
    const encryption = new EncryptionService({ keySuffix: 'ezss' })
    const text = 'Hello World with keySuffix'
    const ciphertext = encryption.encrypt(text)
    const result = encryption.decrypt(ciphertext)
    expect(result).eq(text)
  })
})
