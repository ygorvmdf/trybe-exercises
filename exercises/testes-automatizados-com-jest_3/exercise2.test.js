const { it, expect } = require("@jest/globals");

let randomNumber = () => Math.floor(Math.random * 101);

it('test if implementation ocurred once', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => {
        return a / b;
    });
    const firstImplementation = randomNumber(10, 5);
    expect(randomNumber).toHaveBeenCalled;
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(firstImplementation).toBe(2);
    expect(randomNumber(1000, 2)).not.toBe(500);
    expect(randomNumber).toHaveBeenCalledTimes(2);
})
