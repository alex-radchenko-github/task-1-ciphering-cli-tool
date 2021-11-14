const {getConfig} = require('./src/getConfig.js')
const {pipeline} = require("stream")
const {splitConfig} = require("./src/splitConfig.js");
const {getTransformStreams} = require("./src/getTransformStreams.js");
const {checkFileExists} = require('./src/checks/checkFileExists')
const {checkDuplicateArguments} = require("./src/checks/checkDuplicateArguments");
const {checkConfig} = require("./src/checks/checkConfig");
const {getInputType} = require("./src/getInputType");
const {getOutputType} = require("./src/getOutputType");


const config = getConfig(['-c', '--config']);
const inputFilePath = getConfig(['-i', '--input']);
const outputFilePath = getConfig(['-o', '--output']);


const input = getInputType(inputFilePath)
const output = getOutputType(outputFilePath)


checkDuplicateArguments()
checkConfig(splitConfig(config))
checkFileExists(inputFilePath)
checkFileExists(outputFilePath)


const transformStreams = getTransformStreams(splitConfig(config))

pipeline(
    input,
    ...transformStreams,
    output,
    err => {
        if (err) {
            console.error('Pipeline failed', err);
        } else {
            console.log('Succeeded');
        }
    }
)