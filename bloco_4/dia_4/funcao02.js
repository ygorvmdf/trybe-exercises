function greaterKey(array) {
    let biggerKey = array[0];
    for (key in array) {
        if (array[key] > biggerKey) {
            biggerKey = key;
        }
    }
    return biggerKey;
}

console.log(greaterKey([2, 3, 6, 7, 10, 1]));