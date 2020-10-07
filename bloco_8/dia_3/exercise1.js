const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const flattenedArray = arrays.reduce((accumulator, current) => {
    return  accumulator.concat(current)},
    []);
    return flattenedArray;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
