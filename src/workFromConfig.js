const {AtbashCipher} = require('./ciphers/AtbashCipher')
const {CaesarCipher} = require('./ciphers/CaesarCipher.js')
const {Rot8Cipher} = require('./ciphers/Rot8Cipher.js')


function workFromConfig(mark, sentence) {
    if (mark === "C1"){
        return new CaesarCipher(sentence).coder()
    }
    else if (mark === "C0"){
        return new CaesarCipher(sentence).decoder()
    }
    else if (mark === "R1"){
        return new Rot8Cipher(sentence).coder()
    }
    else if (mark === "R0"){
        return new Rot8Cipher(sentence).decoder()
    }
    else if (mark === "A"){
        return new AtbashCipher(sentence).coder()
    }
    
}

module.exports = {
    workFromConfig
}