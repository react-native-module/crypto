/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { randomBytesWithoutNativeModule } from '@react-native-module/randombytes/src/randomBytesWithoutNativeModule'

// https://github.com/mvayngrib/react-native-crypto/blob/204384f06e3fa78c3a272ac55dd3a9de4743f1f3/index.js#L7
if (typeof globalThis === 'object') {
  if (!globalThis.crypto) {
    // @ts-expect-error
    globalThis.crypto = {}
  }
  if (!globalThis.crypto.getRandomValues) {
    globalThis.crypto.getRandomValues = randomBytesWithoutNativeModule
  }
}
