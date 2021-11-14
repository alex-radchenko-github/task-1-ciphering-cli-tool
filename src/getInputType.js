const fs = require("fs");

function getInputType(inputFilePath) {
    let input
    if (inputFilePath === null) {
        input = process.stdin
    } else {
        input = fs.createReadStream(inputFilePath);
    }
    return input

}

module.exports = {
    getInputType
}