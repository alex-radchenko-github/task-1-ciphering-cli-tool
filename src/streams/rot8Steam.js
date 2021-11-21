const {Transform} = require("stream");
const {workFromConfig} = require('../workFromConfig.js')


function rot8SteamCoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            callback(null, workFromConfig("R1", chunk.toString().trim()));
        },
    });

}

function rot8SteamDecoder() {
    return new Transform({
        transform(chunk, encoding, callback) {
            callback(null, workFromConfig("R0", chunk.toString().trim()));
        },
    });

}

module.exports = {
    rot8SteamCoder,
    rot8SteamDecoder

}