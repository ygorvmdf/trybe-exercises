const { it, expect } = require('@jest/globals');
const myRemove = require('./my-remove');
let arrTest = [1, 2, 3, 4, 5];
myRemove(arrTest);

it('should test if items is removed if contained', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(arrTest).toEqual([1, 2, 3, 4, 5]);
})
