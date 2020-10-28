const myRemove = (arr, item) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = myRemove;
