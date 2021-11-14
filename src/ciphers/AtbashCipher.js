const {Cipher} = require('./Cipher.js')

class AtbashCipher {
    constructor(str) {
        this.str = str;
        this.cipherAlphabet = "zyxwvutsrqponmlkjihgfedcba";
    }

    coder() {
        let atbashCipherCoder = new Cipher(this.cipherAlphabet, this.str)
        return atbashCipherCoder.coder()
    }
}

module.exports = {
    AtbashCipher
};
