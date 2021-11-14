const {getRedColorText} = require("./getRedColorText");

const errorExitProcess = () => {
    process.stderr.write(getRedColorText(getRedColorText(`Wrong config`)))
    process.exit(9)

}

function checkConfig(config) {
    let allCiphers = ['C1', 'C0', 'R1', 'R0', 'A']
    let ciphers = ['C', 'R', 'A']
    let flags = ['0', '1']

    for (let i = 0; i < config.length; i++) {

        if (!ciphers.includes(config[i][0])) {
            errorExitProcess()
        } else if (config[i][0] === 'R' && !flags.includes(config[i][1])) {
            errorExitProcess()
        } else if (config[i][0] === 'C' && !flags.includes(config[i][1])) {
            errorExitProcess()
        } else if (config[i][0] === 'A' && config[i].length > 1) {
            errorExitProcess()
        } else if (!allCiphers.includes(config[i])) {
            errorExitProcess()
        }

    }


}

module.exports = {checkConfig}