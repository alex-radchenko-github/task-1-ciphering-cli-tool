const {getRedColorText} = require("./getRedColorText.js");

function checkNotConfig(config) {
    if (config === null || config === undefined) {
        process.stderr.write(getRedColorText("Error: missing config"))
        process.exit(9)
    } else {
        return true
    }
}

module.exports = {
    checkNotConfig
}