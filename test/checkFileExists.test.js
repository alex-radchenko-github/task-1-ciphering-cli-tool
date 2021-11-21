const {expect, test} = require("@jest/globals");
const {checkFileExists} = require("../src/checks/checkFileExists");

test('checkFileExists - true', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkFileExists('./input.txt');
    expect(mockExit).not.toHaveBeenCalledWith(9);
})

test('checkFileExists - false', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkFileExists('');
    expect(mockExit).not.toHaveBeenCalledWith(1);
})