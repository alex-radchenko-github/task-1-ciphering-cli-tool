const {getInputType} = require("../src/getInputType");

describe("get input file", () => {
    test('input is process.stdin', () => {
        expect(getInputType(null)).toBe(process.stdin)
    })

    test('input is Stream', () => {
        expect(getInputType('./input.txt')).not.toBe(process.stdin)
    })
})