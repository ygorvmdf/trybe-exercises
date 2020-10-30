const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('if callback convert the string to lowercase', () => {
    let expected = '';
    uppercase('xablau', parameter => {
      expected = parameter;
    });
    expect(expected).toBe('XABLAU');
})
