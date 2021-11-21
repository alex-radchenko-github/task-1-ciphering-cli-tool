class Cipher {
    constructor(cipherAlphabet, str) {
        this.plainAlphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.cipherAlphabet = cipherAlphabet;
        this.str = str.trim();
        this.resultCoder = ''
    }

    coder() {

        for (let i = 0; i < this.str.length; i++) {
            if (!this.plainAlphabet.includes(this.str[i].toLowerCase())) {
                this.resultCoder += this.str[i]
            } else if (this.str[i].toLowerCase() === this.str[i]) {
                this.resultCoder += this.cipherAlphabet[this.plainAlphabet.indexOf(this.str[i])]
            } else {
                this.resultCoder += this.cipherAlphabet[this.plainAlphabet.indexOf(this.str[i].toLowerCase())].toUpperCase()
            }

        }
        return this.resultCoder.toString().trim() + `\n`
    }

    decoder() {

        for (let i = 0; i < this.str.length; i++) {
            if (!this.plainAlphabet.includes(this.str[i].toLowerCase())) {
                this.resultCoder += this.str[i]
            } else if (this.str[i].toLowerCase() === this.str[i]) {
                this.resultCoder += this.plainAlphabet[this.cipherAlphabet.indexOf(this.str[i])]
            } else {
                this.resultCoder += this.plainAlphabet[this.cipherAlphabet.indexOf(this.str[i].toLowerCase())].toUpperCase()
            }

        }
        return this.resultCoder.toString().trim() + `\n`
    }

}


module.exports = {
    Cipher
};