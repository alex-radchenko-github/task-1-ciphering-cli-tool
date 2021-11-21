const {expect} = require("@jest/globals")
const {Rot8Cipher} = require("../src/ciphers/Rot8Cipher.js");


describe("rot8Cipher", () => {
    test('rot8Cipher coder', () => {
        let aaa = new Rot8Cipher("aaa").coder()
        expect(aaa).toBe('iii'.trim() + `\n`)
    })
    test('Rot8Cipher coder', () => {
        let aaa = new Rot8Cipher("AAA").coder()
        expect(aaa).toBe('III'.trim() + `\n`)
    })
    test('Rot8Cipher decoder', () => {
        let aaa = new Rot8Cipher("jjj").decoder()
        expect(aaa).toBe('bbb'.trim() + `\n`)
    })

})
