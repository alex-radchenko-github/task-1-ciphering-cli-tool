const {splitConfig} = require("../src/splitConfig.js");

test('splitConfig', () => {
    let split = splitConfig("C1-C1")
    expect(split.join('')).toBe(['C1', 'C1'].join(''))
})