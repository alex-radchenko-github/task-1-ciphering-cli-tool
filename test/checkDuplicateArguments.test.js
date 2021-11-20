const {checkDuplicateArguments} = require("../src/checks/checkDuplicateArguments.js");

test('checkDuplicateArguments ', () => {


    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkDuplicateArguments(true);
    expect(mockExit).toHaveBeenCalledWith(9);
})

test('checkDuplicateArguments false ', () => {


    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkDuplicateArguments(false);
    expect(mockExit).toHaveBeenCalled();
})