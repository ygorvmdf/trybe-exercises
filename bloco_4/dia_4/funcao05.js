function higherRate(array) {
    /*counting the rate of each element in the array */
    let allTheRates = {};
    for (let i in array) {
        let counter = 0;
        for (let j in array) {
            if (array[i] == array[j]) {
                counter += 1;
            }
        }
        allTheRates[array[i]] = counter;
    }
    /* verifying wich key has the biggest value */
    let bigRate = 0;
    let bigKey = "";
    for (let key in allTheRates) {
        if (allTheRates[key] > bigRate) {
            bigRate = allTheRates[key];
            bigKey = key;
        }
    }
    return bigKey;
}

console.log(higherRate([2, 3, 2, 5, 8, 2, 3, 3, 3]));