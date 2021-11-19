const {expect} = require("@jest/globals")
const {spawn} = require('child_process');

describe("success scenarios", () => {
    test('1 - from success scenarios', () => {

        const cp = spawn('node', ['my_ciphering_cli', '--config', 'C1-C0-A-R1-R0-A-R0-R0-C1-A',  '-i', './input.txt', '-o', './output.txt']);

        let res = '';

        cp.stdout.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stdout.on('end', () => {
            res = res.trim();
            expect(res).toBe(`Succeeded`)

        })
    })

    test('2-1 - from success scenarios', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A',  '-i', './input.txt', '-o', './output.txt']);

        let res = '';

        cp.stdout.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stdout.on('end', () => {
            res = res.trim();
            expect(res).toBe(`Succeeded`)

        })
    })

    test('2-2 - from success scenarios', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A',  '-i', './input.txt', '-o', './output.txt']);

        let res = '';

        cp.stdout.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stdout.on('end', () => {
            res = res.trim();
            expect(res).toBe(`Succeeded`)

        })
    })

    test('2-3 - from success scenarios', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1',  '-i', './input.txt', '-o', './output.txt']);

        let res = '';

        cp.stdout.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stdout.on('end', () => {
            res = res.trim();
            expect(res).toBe(`Succeeded`)

        })
    })


})