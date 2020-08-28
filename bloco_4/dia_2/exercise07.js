let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = 0;

for (value in numbers) {
    if (value > 0) {
        if(numbers[value] < smallestNumber) {
            smallestNumber = numbers[value];
        }
    } else {
        smallestNumber = numbers[0];
    }
}

console.log(`O menor numero desta array vale ${smallestNumber}`);