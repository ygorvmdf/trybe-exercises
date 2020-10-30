let randomNumber = () => Math.floor(Math.random * 101);

it('should return 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
})
