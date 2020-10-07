const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const flattenedArray = arrays.reduce((accumulator, current) => {
    console.log(accumulator);
    console.log(current);
    return  accumulator.concat(current)},
    []);
}

console.log(flatten());

// accumulator = [] | current = ["1", "2", "3"] >> concat === ["1", "2", "3"]
// accumulator = ["1", "2", "3"] | current = [true] >> concat === ["1", "2", "3", true]
// accumulator = ["1", "2", "3", true] | current = [4, 5, 6] >> concat

// assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
