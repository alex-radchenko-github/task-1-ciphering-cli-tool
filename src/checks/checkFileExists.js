const fs = require('fs')
const {getRedColorText} = require("./getRedColorText");


function checkFileExists(path) {
    if (!fs.existsSync(path) && path != null) {
        process.stderr.write(getRedColorText(`No such file or directory`))
        process.exit(9)
    }
}

module.exports = {checkFileExists}