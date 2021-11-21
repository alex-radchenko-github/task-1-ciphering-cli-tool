const {Transform} = require("stream");
const {workFromConfig} = require('../workFromConfig.js')


function atbashSteamCoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            // let str = chunk.toString().trim()
            callback(null, workFromConfig("A", chunk.toString().trim()));
        },
    });

}


module.exports = {
    atbashSteamCoder

}