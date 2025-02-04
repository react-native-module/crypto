const test = require('tape')
const crypto = require('../')

const randomBytesFunctions = {
  randomBytes: require('randombytes'),
  pseudoRandomBytes: crypto.pseudoRandomBytes
}

for (const randomBytesName in randomBytesFunctions) {
  // Both randomBytes and pseudoRandomBytes should provide the same interface
  const randomBytes = randomBytesFunctions[randomBytesName]

  test('get error message', function (t) {
    try {
      const b = randomBytes(10)
      t.ok(Buffer.isBuffer(b))
      t.end()
    } catch (err) {
      t.ok(/not supported/.test(err.message), '"not supported"  is in error message')
      t.end()
    }
  })

  test(randomBytesName, function (t) {
    t.plan(5)
    t.equal(randomBytes(10).length, 10)
    t.ok(Buffer.isBuffer(randomBytes(10)))
    randomBytes(10, function (ex, bytes) {
      t.error(ex)
      t.equal(bytes.length, 10)
      t.ok(Buffer.isBuffer(bytes))
      t.end()
    })
  })

  test(randomBytesName + ' seem random', function (t) {
    const L = 1000
    const b = randomBytes(L)

    const mean = [].reduce.call(b, function (a, b) { return a + b }, 0) / L

    // test that the random numbers are plausably random.
    // Math.random() will pass this, but this will catch
    // terrible mistakes such as this blunder:
    // https://github.com/dominictarr/crypto-browserify/commit/3267955e1df7edd1680e52aeede9a89506ed2464#commitcomment-7916835

    // this doesn't check that the bytes are in a random *order*
    // but it's better than nothing.

    const expected = 256 / 2
    const smean = Math.sqrt(mean)

    // console.log doesn't work right on testling, *grumble grumble*
    console.log(JSON.stringify([expected - smean, mean, expected + smean]))
    t.ok(mean < expected + smean)
    t.ok(mean > expected - smean)

    t.end()
  })
}
