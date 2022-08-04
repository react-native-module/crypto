import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from '@rollup/plugin-typescript';
import json from "@rollup/plugin-json";

const inputSrc = [
  ["./src/index.ts", "es"],
  ["./src/index.ts", "cjs"],
]

const extensions = [".mjs", ".json", ".ts", ".native.ts", ".native.js"]

export default inputSrc
  .map(([input, format]) => {
    return {
      input,
      output: {
        dir: `lib/${format}`,
        format,
      },
      preserveModules: true,
      external: [
        "@react-native-module/randombytes",
        '@react-native-module/pbkdf2',
        "browserify-cipher",
        "browserify-sign",
        'browserify-sign/browser/algorithms.json',
        "create-ecdh",
        "create-hash",
        "create-hmac",
        "diffie-hellman",
        "elliptic",
        "inherits",
        "public-encrypt",
        'react-native'
      ],
      plugins: [
        json(),
        typescript(),
        nodeResolve(),
        // https://velog.io/@peterkimzz/rollup-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8
        // CommonJS 로 작성된 모듈들을 ES6 바꾸어서 rollup이 해석할 수 있게 도와줍니다.
        commonjs({
          extensions: [...extensions, ".js"],
        }),
      ]
    }
  })
