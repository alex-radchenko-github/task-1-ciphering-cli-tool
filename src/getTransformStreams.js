const {caesarSteamDecoder, caesarSteamCoder} = require("./streams/caesarSteam.js");
const {rot8SteamCoder, rot8SteamDecoder} = require("./streams/rot8Steam.js");
const {atbashSteamCoder} = require("./streams/atbashSteam.js");


function getTransformStreams(arrConfig) {
    let transformStreams = []

    for (let i = 0; i < arrConfig.length; i++) {
        if (arrConfig[i] === 'C1') {
            transformStreams.push(caesarSteamCoder())
        } else if (arrConfig[i] === 'C0') {
            transformStreams.push(caesarSteamDecoder())
        } else if (arrConfig[i] === 'R1') {
            transformStreams.push(rot8SteamCoder())
        } else if (arrConfig[i] === 'R0') {
            transformStreams.push(rot8SteamDecoder())
        } else if (arrConfig[i] === 'A') {
            transformStreams.push(atbashSteamCoder())
        }

    }
    return transformStreams

}

module.exports = {getTransformStreams}