const {getRedColorText} = require("../src/checks/getRedColorText.js");

describe("get red color text test", () => {
    test('get red color text test', () => {
        const mock = jest.fn();
        mock.mockReturnValueOnce('aaa')
        let str = mock()
        expect(getRedColorText(str)).toBe(`\x1b[91m${str}\n\x1b[39m`)
    })
})