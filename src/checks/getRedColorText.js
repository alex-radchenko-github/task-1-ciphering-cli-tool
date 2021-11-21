function getRedColorText(str) {
    return `\x1b[91m${str}\n\x1b[39m`
}

module.exports = {
    getRedColorText
}