let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let doubleNumers = [];
let temp = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (i == numbers.length - 1) {
        doubleNumers.push(numbers[i] * 2);
    } else {
        temp = numbers[i] * numbers[i + 1];
        doubleNumers.push(temp);
    }
}

console.log(doubleNumers);