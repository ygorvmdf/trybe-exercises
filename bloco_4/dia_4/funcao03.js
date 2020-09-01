function smallestKey(array) {
    let smallNumber = array[0];
    let smallKey = 0;
    for (let key in array) {
        if (array[key] < smallNumber) {
            smallNumber = array[key];
            smallKey = key;
        }
    }
    return smallKey;
}

console.log(smallestKey([2, 4, 6, 7, 10, 0, -3]));