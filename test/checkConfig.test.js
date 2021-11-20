const {checkConfig} = require("../src/checks/checkConfig.js");

test('checkConfig ', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkConfig(['C', 'C8', 'R', 'R8', 'A8', '']);
    expect(mockExit).toHaveBeenCalledWith(9);
})

test('checkConfig ', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    });
    checkConfig('C');
    expect(mockExit).toBeCalled();
})