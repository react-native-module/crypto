# react-native-module/crypto

A port of node's `crypto` module to React Native.
The goal of this module is to reimplement node's crypto module so that it can run in react-native supported environments.
Features and interface must be compatible with node's crypto

this module is a clone of [crypto-browserify](https://github.com/crypto-browserify/crypto-browserify), [react-native-crypto](https://github.com/mvayngrib/react-native-crypto)

## Why use this module and Not others

If your app is running on mobile [android, ios] only, sufficient to use module react-native-crypto
Use this module if you are considering other platforms

## Install

This module has peerDependency "react", "react-native", "@react-native-module/pbkdf2"

A typical workflow:

```
npm i --save @react-native-module/crypto @react-native-module/pbkdf2
```

```
yarn add @react-native-module/crypto @react-native-module/pbkdf2
```

## List of Support node's features

Here is the subset that is currently implemented:

- createHash (sha1, sha224, sha256, sha384, sha512, md5, rmd160)
- createHmac (sha1, sha224, sha256, sha384, sha512, md5, rmd160)
- pbkdf2
- pbkdf2Sync
- randomBytes
- pseudoRandomBytes
- createCipher (aes)
- createDecipher (aes)
- createDiffieHellman
- createSign (rsa, ecdsa)
- createVerify (rsa, ecdsa)
- createECDH (secp256k1)
- publicEncrypt/privateDecrypt (rsa)

## Todo

these features from node's `crypto` are still unimplemented.

- createCredentials

these features would benefit from native implementations

- pbkdf2
- createSign
- createVerify
- createECDH
- publicEncrypto/privateDecrypt (rsa)

## contributions

Thank you for investing your time in contributing to this project!

## License

MIT
