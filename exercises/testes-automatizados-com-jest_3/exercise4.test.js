const { it, expect } = require("@jest/globals");

let toUpperCase = str => typeof str === "string" ? str.toUpperCase() : 'Only string accepted.';

let firstLetter = str => typeof str === "string" ? str[0] : 'Only string accepted.';

let concatString = (str1, str2) => typeof str1 === "string" && typeof str2 === "string" ? str1 + str2 : 'Only string accepted or number of args invalid.';

jest.mock('./exercise4.test.js');

describe('testing the first function bafore and after changing the implementation', () => {
    it('should return the string to upper case', () => {
        expect(toUpperCase('xablau')).toBe('XABLAU');
        expect(toUpperCase('foo')).toBe('FOO');
        expect(toUpperCase('bar')).not.toBe('bar');
        expect(toUpperCase()).toBe('Only string accepted.')
        expect(toUpperCase([])).toBe('Only string accepted.')
        expect(toUpperCase({})).toBe('Only string accepted.')
        expect(toUpperCase(5)).toBe('Only string accepted.')
    })

    it('should change the implementation to return lower case', () => {
        toUpperCase = jest.fn().mockImplementation(str => typeof str === "string" ? str.toLocaleLowerCase() : 'Only string accepted.');
        expect(toUpperCase('XABLAU')).toBe('xablau');
        expect(toUpperCase('FOO')).toBe('foo');
        expect(toUpperCase('BAR')).not.toBe('BAR');
        expect(toUpperCase()).toBe('Only string accepted.')
        expect(toUpperCase([])).toBe('Only string accepted.')
        expect(toUpperCase({})).toBe('Only string accepted.')
        expect(toUpperCase(5)).toBe('Only string accepted.')
    })
})

describe('testing the second function bafore and after changing the implementation', () => {
    it('should return the first letter of the string', () => {
        expect(firstLetter('xablau')).toBe('x');
        expect(firstLetter('foo')).toBe('f');
        expect(firstLetter('bar')).not.toBe('bar');
        expect(firstLetter()).toBe('Only string accepted.')
        expect(firstLetter([])).toBe('Only string accepted.')
        expect(firstLetter({})).toBe('Only string accepted.')
        expect(firstLetter(5)).toBe('Only string accepted.')
    })

    it('should change the implementation to return last letter', () => {
        firstLetter = jest.fn().mockImplementation(str => typeof str === "string" ? str[str.length - 1] : 'Only string accepted.');
        expect(firstLetter('xablau')).toBe('u');
        expect(firstLetter('foo')).toBe('o');
        expect(firstLetter('bar')).not.toBe('bar');
        expect(firstLetter()).toBe('Only string accepted.')
        expect(firstLetter([])).toBe('Only string accepted.')
        expect(firstLetter({})).toBe('Only string accepted.')
        expect(firstLetter(5)).toBe('Only string accepted.')
    })
})

describe('testing the third function bafore and after changing the implementation', () => {
    it('concatenate only two strings', () => {
        expect(concatString('xablau', 'u')).toBe('xablauu');
        expect(concatString('foo', 'o')).toBe('fooo');
        expect(concatString('bar', 'bar')).not.toBe('bar');
        expect(concatString('bar')).toBe('Only string accepted or number of args invalid.');
        expect(concatString()).toBe('Only string accepted or number of args invalid.')
        expect(concatString([])).toBe('Only string accepted or number of args invalid.')
        expect(concatString({})).toBe('Only string accepted or number of args invalid.')
        expect(concatString(5)).toBe('Only string accepted or number of args invalid.')
    })

    it('should concatenate 3 strings', () => {
        concatString = jest.fn().mockImplementation((str1, str2, str3) => {
            if (typeof str1 !== 'string' || typeof str2 !== 'string' || typeof str3 !== 'string') return 'Only string accepted or number of args invalid.';
            return str1 + str2 + str3;
        });
        
        expect(concatString('xablau', 'u', 'ha')).toBe('xablauuha');
        expect(concatString('foo', 'o', 'o')).toBe('foooo');
        expect(concatString('bar', 'bar', 'bar')).not.toBe('bar');
        expect(concatString('bar')).toBe('Only string accepted or number of args invalid.');
        expect(concatString()).toBe('Only string accepted or number of args invalid.')
        expect(concatString([])).toBe('Only string accepted or number of args invalid.')
        expect(concatString({})).toBe('Only string accepted or number of args invalid.')
        expect(concatString(5)).toBe('Only string accepted or number of args invalid.')
    })
})
