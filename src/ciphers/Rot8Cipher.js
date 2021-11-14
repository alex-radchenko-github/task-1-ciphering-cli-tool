const {Cipher} = require('./Cipher.js')

class Rot8Cipher {
    constructor(str) {
        this.str = str;
        this.cipherAlphabet = "ijklmnopqrstuvwxyzabcdefgh";
    }

    coder() {
        let rot8CipherCoder = new Cipher(this.cipherAlphabet, this.str)
        return rot8CipherCoder.coder()

    }

    decoder() {
        let rot8CipherDecoder = new Cipher(this.cipherAlphabet, this.str)
        return rot8CipherDecoder.decoder()

    }

}

module.exports = {
    Rot8Cipher
};

// Rot8 rot8
// Plain	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
// Cipher	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z   A	B	C	D	E	F	G	H
