const { it, expect } = require('@jest/globals')
const {obj1, obj2, obj3} = require('./compare-json.js')

test('if objects have deep equality', () => {
    expect(obj1).toEqual(obj2);
    expect(obj2).not.toEqual(obj3);
    expect(obj1).not.toEqual(obj3);
})
