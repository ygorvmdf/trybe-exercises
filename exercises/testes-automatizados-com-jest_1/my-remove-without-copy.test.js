const { it, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./my-remove-without-copy');
const arrTest = [1, 2, 3, 4];
myRemoveWithoutCopy(arrTest, 3);

it('should remove item from original array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(arrTest).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})