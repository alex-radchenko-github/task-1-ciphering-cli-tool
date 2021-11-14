const fs = require("fs");

function getOutputType(outputFilePath) {
    let output
    if (outputFilePath === null) {
        output = process.stdout
    } else {
        output = fs.createWriteStream(outputFilePath, {flags: 'a'});
    }
    return output

}

module.exports = {
    getOutputType
}