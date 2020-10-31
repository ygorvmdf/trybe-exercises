const myUpperCase = require('./exercise4.test')

jest.spyOn(myUpperCase, 'toUpperCase');
myUpperCase.toUpperCase.mockImplementation(str => typeof str === 'string' ? str.toLocaleLowerCase() : 'Only string accepted.');

myUpperCase.toUpperCase.mockRestore();

it('should have the original implementation', () => {
    expect(myUpperCase.toUpperCase('xablau')).toBe('XABLAU');
})
