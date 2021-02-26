const hello = require('../src/hello')

test('returns hello', () => {
    expect(hello()).toBe('hello')
})
