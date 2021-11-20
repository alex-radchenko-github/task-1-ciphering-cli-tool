const {getRedColorText} = require("./getRedColorText");

// function checkDuplicateArguments() {
//     if (!(Array.from(new Set(process.argv)).join("") === process.argv.join(""))) {
//         process.stderr.write(getRedColorText("Error: Duplicate Arguments"))
//         process.exit(9)
//     }
//
// }
function checkDuplicateArguments(res) {
    if (res) {
        process.stderr.write(getRedColorText("Error: Duplicate Arguments"))
        process.exit(9)
    }

}

module.exports = {
    checkDuplicateArguments
}
