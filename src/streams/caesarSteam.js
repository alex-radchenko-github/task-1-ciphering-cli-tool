const {Transform} = require("stream");
const {workFromConfig} = require('../workFromConfig.js')


function caesarSteamCoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            callback(null, workFromConfig("C1", chunk.toString().trim()));
        },
    });

}

function caesarSteamDecoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            callback(null, workFromConfig("C0", chunk.toString().trim()));
        },
    });

}

module.exports = {
    caesarSteamCoder,
    caesarSteamDecoder

}