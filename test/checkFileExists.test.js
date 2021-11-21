const {expect, test} = require("@jest/globals");
const {checkFileExists} = require("../src/checks/checkFileExists");

test('checkFileExists', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkFileExists('');
    expect(mockExit).not.toHaveBeenCalledWith(0);
})

test('checkFileExists - null', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkFileExists(null);
    expect(mockExit).not.toHaveBeenCalledWith(0);
})