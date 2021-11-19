const {expect} = require("@jest/globals")
const {AtbashCipher} = require("../src/ciphers/AtbashCipher.js");


describe("AtbashCipher", () => {
    test('AtbashCipher coder', () => {
        let aaa = new AtbashCipher("aaa").coder()
        expect(aaa).toBe('zzz'.trim() + `\n`)
    })

    test('AtbashCipher coder', () => {
        let aaa = new AtbashCipher("AAA").coder()
        expect(aaa).toBe('ZZZ'.trim() + `\n`)
    })

    test('AtbashCipher coder', () => {
        let aaa = new AtbashCipher("aaaГ").coder()
        expect(aaa).toBe('zzzГ'.trim() + `\n`)
    })

})
