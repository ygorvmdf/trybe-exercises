const { it, expect } = require("@jest/globals");

let randomNumber = () => Math.floor(Math.random * 101);

randomNumber = jest.fn().mockImplementation((a, b, c) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") return 'invalid arguments';
    return a * b * c;
});

it('should return the multiplication of three parameters', () => {
    expect(randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber(1, '2', 3)).toBe('invalid arguments');
    expect(randomNumber(1, '2')).toBe('invalid arguments');
    expect(randomNumber).toHaveBeenCalled();
})

it('should return the double value', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((number) => typeof number === 'number' ? number * 2: 'invalid arguments');

    expect(randomNumber(1)).toBe(2);
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber('2')).toBe('invalid arguments');
    expect(randomNumber()).toBe('invalid arguments');
})
