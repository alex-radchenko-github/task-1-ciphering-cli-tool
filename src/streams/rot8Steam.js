const {Transform} = require("stream");
const {workFromConfig} = require('../workFromConfig.js')


function rot8SteamCoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            let str = chunk.toString().trim()
            callback(null, workFromConfig("R1", str));
        },
    });

}

function rot8SteamDecoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            let str = chunk.toString().trim()
            callback(null, workFromConfig("R0", str));
        },
    });

}

module.exports = {
    rot8SteamCoder,
    rot8SteamDecoder

}