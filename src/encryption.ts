// eslint-disable-next-line n/no-unpublished-import
import AES from 'crypto-js/aes'
// eslint-disable-next-line n/no-unpublished-import
import Utf8 from 'crypto-js/enc-utf8'

import { getFingerprint } from '~/fingerprint.ts'

/** EZSS Encryption Service Options */
export type EncryptionServiceOptions = {
  keyPrefix?: string
  keySuffix?: string
}

/** EZSS Encryption Service */
export class EncryptionService {
  static _instance: EncryptionService
  key!: string

  constructor({ keyPrefix, keySuffix }: EncryptionServiceOptions = {}) {
    if (EncryptionService._instance)
      return EncryptionService._instance

    this.key = `${keyPrefix}${getFingerprint()}${keySuffix}`
    EncryptionService._instance = this
  }

  decrypt(ciphertext: string) {
    return AES.decrypt(ciphertext, this.key).toString(Utf8)
  }

  encrypt(message: string) {
    return AES.encrypt(message, this.key).toString()
  }
}

/** EZSS Encryption Service */
export const encryption = Object.freeze(new EncryptionService())
