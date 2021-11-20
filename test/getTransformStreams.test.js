const {getTransformStreams} = require("../src/getTransformStreams");


test('getTransformStreams', () => {
    let transformStreams = getTransformStreams(["C1", "C0","R1","R0","A"])
    expect(transformStreams.length).toBe(5)
})