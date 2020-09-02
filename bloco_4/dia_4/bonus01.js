numeralDictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

/* verificacao recursiva */
function sumIfIsGreaterThanNext(numeral) {
    let listSize = numeral.length;
    if (numeral.length > 1) {
        if (numeral[listSize - 1] > numeral[listSize - 2]) {
            numeral[listSize - 2] = Number(numeral[listSize - 1]) - Number(numeral[listSize - 2]);
            numeral.pop();
        } else {
            numeral[listSize - 2] = Number(numeral[listSize - 1]) + Number(numeral[listSize - 2]);
            numeral.pop();
        }
        sumIfIsGreaterThanNext(numeral);          // [1000, 500, 100, 1, 5]
    } else {
        return
    }
    return numeral[0];
}
  
/* converter primeiro a string em uma lista de numeros sequenciais */
function stringInRomanToNumbers(numeral) {
    let finalString = [];
    for (let key in numeral) {
        finalString.push(numeralDictionary[numeral[key]]);
    }
    return finalString
}

let numberList = stringInRomanToNumbers("CVI")
console.log(sumIfIsGreaterThanNext(numberList));


