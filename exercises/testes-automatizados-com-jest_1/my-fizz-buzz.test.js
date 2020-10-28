const { it, expect } = require('@jest/globals');
const mymyFizzBuzz = require('./my-fizz-buzz.js');

describe('return the rigth string for divisible for 3, 5 or both', () => {
    it('should return fizzbuzz if divisible for 3 and 5', () => {
        expect(mymyFizzBuzz(15)).toBe('fizzbuzz');
    })
    it('should return fizz if divisible for 3', () => {
        expect(mymyFizzBuzz(3)).toBe('fizz');
    })
    it('should return buzz if divisible for 5', () => {
        expect(mymyFizzBuzz(5)).toBe('buzz');
    })
    it('should return the number if not divisible for 3 or 5', () => {
        expect(mymyFizzBuzz(4)).toBe(4);
    })
    it('should return false if parameter is not a number', () => {
        expect(mymyFizzBuzz('xablau')).toBeFalsy();
    })
})
