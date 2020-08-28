let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let comparisonNumber = 0;

for ( value in numbers) {
    if (numbers[value] > comparisonNumber) {
        comparisonNumber = numbers[value];
    }
}

console.log(comparisonNumber);