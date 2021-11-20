const {getOutputType} = require("../src/getOutputType");

describe("get output file", () => {
    test('output is process.stdin', () => {
        expect(getOutputType(null)).toBe(process.stdout)

    })

    test('output is stream', () => {
        expect(getOutputType('./output.txt')).not.toBe(process.stdout)
    })
})