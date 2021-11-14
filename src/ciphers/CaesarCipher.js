const {Cipher} = require('./Cipher.js')

class CaesarCipher {
    constructor(str) {
        this.str = str;
        this.cipherAlphabet = "bcdefghijklmnopqrstuvwxyza";
    }

    coder() {
        let caesarCipherCoder = new Cipher(this.cipherAlphabet, this.str)
        return caesarCipherCoder.coder()
    }

    decoder() {
        let caesarCipherDecoder = new Cipher(this.cipherAlphabet, this.str)
        return caesarCipherDecoder.decoder()
    }
}

module.exports = {
    CaesarCipher
};