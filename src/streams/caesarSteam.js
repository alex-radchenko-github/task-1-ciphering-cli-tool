const {Transform} = require("stream");
const {workFromConfig} = require('../workFromConfig.js')


function caesarSteamCoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            let str = chunk.toString().trim()
            callback(null, workFromConfig("C1", str));
        },
    });

}

function caesarSteamDecoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            let str = chunk.toString().trim()
            callback(null, workFromConfig("C0", str));
        },
    });

}

module.exports = {
    caesarSteamCoder,
    caesarSteamDecoder

}