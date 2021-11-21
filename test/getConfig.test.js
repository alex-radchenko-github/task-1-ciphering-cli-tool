const {getConfig} = require("../src/getConfig");
const {expect} = require("@jest/globals");

test('getConfig', () => {

    process.argv = ['my_ciphering_cli', '-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1', '-i', './input.txt', '-o', './output.txt']

    let config = getConfig(['-c', '--config'])
    expect(config).toEqual('C1-R1-C0-C0-A-R0-R1-R1-A-C1')
})

test('getConfig', () => {

    process.argv = ['my_ciphering_cli', '-i', './input.txt', '-o', './output.txt']

    let config = getConfig(['-c', '--config'])
    expect(config).toEqual(null)
})