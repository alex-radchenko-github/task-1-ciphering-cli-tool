const {expect} = require("@jest/globals")
const {CaesarCipher} = require("../src/ciphers/CaesarCipher.js");


describe("CaesarCipher", () => {
    test('CaesarCipher coder', () => {
        let aaa = new CaesarCipher("aaa").coder()
        expect(aaa).toBe('bbb'.trim() + `\n`)
    })

    test('CaesarCipher coder', () => {
        let aaa = new CaesarCipher("AAA").coder()
        expect(aaa).toBe('BBB'.trim() + `\n`)
    })
    test('CaesarCipher decoder', () => {
        let aaa = new CaesarCipher("bbb").decoder()
        expect(aaa).toBe('aaa'.trim() + `\n`)
    })
    test('CaesarCipher decoder', () => {
        let aaa = new CaesarCipher("BBB").decoder()
        expect(aaa).toBe('AAA'.trim() + `\n`)
    })

    test('CaesarCipher coder', () => {
        let aaa = new CaesarCipher("aaaГ").coder()
        expect(aaa).toBe('bbbГ'.trim() + `\n`)
    })
    test('CaesarCipher decoder', () => {
        let aaa = new CaesarCipher("BBBЩ").decoder()
        expect(aaa).toBe('AAAЩ'.trim() + `\n`)
    })

})
