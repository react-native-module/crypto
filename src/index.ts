import createHashModule from 'create-hash'
import createHmacModule from 'create-hmac'
import randomBytesModule from '@react-native-module/randombytes'
import signAlogos from 'browserify-sign/browser/algorithms.json'
import { pbkdf2 as pbkdf2Ori, pbkdf2Sync as pbkdf2SyncOri } from '@react-native-module/pbkdf2'
import aes from 'browserify-cipher'
import dh from 'diffie-hellman'
import sign from 'browserify-sign'
import createEcdhModule from 'create-ecdh'
import publicEncryptModule from 'public-encrypt'

export const Hash = createHashModule
export const createHash = Hash
export const Hmac = createHmacModule
export const createHmac = createHmacModule
export const randomBytes = randomBytesModule.randomBytes
export const rng = randomBytes
export const pseudoRandomBytes = randomBytes
export const prng = randomBytes

const hashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(signAlogos))
export function getHashes (): string[] {
  return hashes
}
export const pbkdf2 = pbkdf2Ori
export const pbkdf2Sync = pbkdf2SyncOri

export const Cipher = aes.Cipher
export const createCipher = aes.createCipher
export const Cipheriv = aes.Cipheriv
export const createCipheriv = aes.createCipheriv
export const Decipher = aes.Decipher
export const createDecipher = aes.createDecipher
export const Decipheriv = aes.Decipheriv
export const createDecipheriv = aes.createDecipheriv
export const getCiphers = aes.getCiphers
export const listCiphers = aes.listCiphers

export const DiffieHellmanGroup = dh.DiffieHellmanGroup
export const createDiffieHellmanGroup = dh.createDiffieHellmanGroup
export const getDiffieHellman = dh.getDiffieHellman
export const createDiffieHellman = dh.createDiffieHellman
export const DiffieHellman = dh.DiffieHellman

export const createSign = sign.createSign
export const Sign = sign.Sign
export const createVerify = sign.createVerify
export const Verify = sign.Verify

export const createECDH = createEcdhModule

export const publicEncrypt = publicEncryptModule.publicEncrypt
export const privateEncrypt = publicEncryptModule.privateEncrypt
export const publicDecrypt = publicEncryptModule.publicDecrypt
export const privateDecrypt = publicEncryptModule.privateDecrypt

export const createCredentials = (): any => {
  throw new Error([
    'sorry, createCredentials is not implemented yet',
    'we accept pull requests',
    'https://github.com/crypto-browserify/crypto-browserify'
  ].join('\n'))
}
