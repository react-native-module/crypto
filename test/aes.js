const test = require('tape')
const crypto = require('browserify-cipher/browser')
const randomBytes = require('pseudorandombytes')

function runIt (i) {
  crypto.listCiphers().forEach(function (cipher) {
    test('run: ' + i, function (t) {
      t.test('ciphers: ' + cipher, function (t) {
        t.plan(1)
        const data = randomBytes(562)
        const password = randomBytes(20)
        const crypter = crypto.createCipher(cipher, password)
        const decrypter = crypto.createDecipher(cipher, password)
        const out = []
        out.push(decrypter.update(crypter.update(data)))
        out.push(decrypter.update(crypter.final()))
        if (cipher.indexOf('gcm') > -1) {
          decrypter.setAuthTag(crypter.getAuthTag())
        }
        out.push(decrypter.final())
        t.equals(data.toString('hex'), Buffer.concat(out).toString('hex'))
      })
    })
  })
  if (i < 4) {
    setTimeout(runIt, 0, i + 1)
  }
}
runIt(1)
test('getCiphers', function (t) {
  t.plan(1)
  t.ok(crypto.getCiphers().length, 'get ciphers returns an array')
})

test('through crypto browserify works', function (t) {
  t.plan(2)
  const crypto = require('../')
  const cipher = 'aes-128-ctr'
  const data = randomBytes(562)
  const password = randomBytes(20)
  const crypter = crypto.createCipher(cipher, password)
  const decrypter = crypto.createDecipher(cipher, password)
  const out = []
  out.push(decrypter.update(crypter.update(data)))
  out.push(decrypter.update(crypter.final()))
  out.push(decrypter.final())
  t.equals(data.toString('hex'), Buffer.concat(out).toString('hex'))
  t.ok(crypto.getCiphers().length, 'get ciphers returns an array')
})
