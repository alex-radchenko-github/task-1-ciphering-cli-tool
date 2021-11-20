const {checkNotConfig} = require("../src/checks/checkNotConfig.js");
const {expect} = require("@jest/globals");

describe("checkNotConfig", () => {
    test('checkNotConfig - null', () => {

        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        checkNotConfig(null);
        expect(mockExit).toHaveBeenCalledWith(9);
    })

    test('checkNotConfig - undefined', () => {

        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        checkNotConfig(undefined);
        expect(mockExit).toHaveBeenCalledWith(9);
    })

    test('checkNotConfig - false', () => {

        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        checkNotConfig('undefined');
        expect(mockExit).not.toHaveBeenCalledWith(9);
    })


})