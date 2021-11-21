const {workFromConfig} = require("../src/workFromConfig.js");


test('workFromConfig with C1', () => {
    let work = workFromConfig("C1", 'a')
    expect(work).toEqual('b' + `\n`)
})

test('workFromConfig with C0', () => {
    let work = workFromConfig("C0", 'b')
    expect(work).toEqual('a' + `\n`)
})

test('workFromConfig with R0', () => {
    let work = workFromConfig("R0", 'i')
    expect(work).toEqual('a' + `\n`)
})

test('workFromConfig with R1', () => {
    let work = workFromConfig("R1", 'a')
    expect(work).toEqual('i' + `\n`)
})

test('workFromConfig with A', () => {
    let work = workFromConfig("A", 'a')
    expect(work).toEqual('z' + `\n`)
})
