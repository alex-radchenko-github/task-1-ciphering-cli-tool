const {checkNotConfig} = require("../src/checks/checkNotConfig.js");
const {expect} = require("@jest/globals");
const {getRedColorText} = require("../src/checks/getRedColorText.js");

describe("checkNotConfig", () => {
    test('checkNotConfig - null', () => {

        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
        });
        checkNotConfig(null);
        expect(mockExit).toHaveBeenCalledWith(9);
    })

    test('checkNotConfig - undefined', () => {

        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
        });
        checkNotConfig(undefined);
        expect(mockExit).toHaveBeenCalledWith(9);
    })

    test('checkNotConfig - check text: Error: missing config', () => {
        const mockStdout = jest.spyOn(process.stderr, 'write').mockImplementation(() => {
        });

        checkNotConfig(null);

        expect(mockStdout).toHaveBeenCalledWith(getRedColorText("Error: missing config"));

    })

    test('checkNotConfig -', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
        });

        checkNotConfig('');
        expect(mockExit).toHaveBeenCalledWith(9);
    })

})