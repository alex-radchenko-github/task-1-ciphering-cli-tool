const {expect} = require("@jest/globals")
const {spawn} = require('child_process');

const {getRedColorText} = require("../src/checks/getRedColorText.js");

describe("error scenarios", () => {
    test('1 - error with the same cli argument twice', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-c', 'C1-C1-R0-A',]);

        let res = '';

        cp.stderr.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stderr.on('end', () => {
            res = res.trim();
            expect(res).toBe(getRedColorText(`Error: Duplicate Arguments`))


        })
    })
    test("2 - User doesn\'t pass -c or --config argument", () => {

        const cp = spawn('node', ['my_ciphering_cli']);

        let res = '';

        cp.stderr.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stderr.on('end', () => {
            res = res.trim();
            expect(res).toBe(getRedColorText(`Error: missing config`))


        })
    })

    test('3 - wrong path input file', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './errorinput.txt', '-o', './output.txt']);

        let res = '';

        cp.stderr.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stderr.on('end', () => {
            res = res.trim();
            expect(res).toBe(getRedColorText(`No such file or directory`))

        });
    })
    test('4- wrong path output file', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './erroroutput.txt']);

        let res = '';

        cp.stderr.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stderr.on('end', () => {
            res = res.trim();
            expect(res).toBe(getRedColorText(`No such file or directory`))

        });

    })
    test('5- wrong argument in config', () => {

        const cp = spawn('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-M', '-i', './input.txt', '-o', './output.txt']);

        let res = '';

        cp.stderr.on('data', (chunk) => {
            res += chunk.toString();
        });

        cp.stderr.on('end', () => {
            res = res.trim();
            expect(res).toBe(getRedColorText('Wrong config'))

        });


    })

})