// eslint-disable-next-line n/no-unpublished-import
import AES from 'crypto-js/aes'
// eslint-disable-next-line n/no-unpublished-import
import Utf8 from 'crypto-js/enc-utf8'

import { getFingerprint } from '~/fingerprint.ts'

/**
 * EZSS Encryption Service
 */
export type EncryptionServiceOptions = {
  keyPrefix?: string
  keySuffix?: string
}

/**
 * EZSS Encryption Service
 */
export class EncryptionService {
  key: string

  constructor({ keyPrefix, keySuffix }: EncryptionServiceOptions = {}) {
    this.key = `${keyPrefix}${getFingerprint()}${keySuffix}`
  }

  decrypt(ciphertext: string) {
    return AES.decrypt(ciphertext, this.key).toString(Utf8)
  }

  encrypt(message: string) {
    return AES.encrypt(message, this.key).toString()
  }
}

// const encryption = new EncryptionService({ keySuffix: '---HELLO WORLD---' })

// const ciphertext = encryption.encrypt('Hello World')

// const result = encryption.decrypt(ciphertext)

// console.log(ciphertext, result)
