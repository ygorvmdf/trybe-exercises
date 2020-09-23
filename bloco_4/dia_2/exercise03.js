let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avarage = 0;

for (value in numbers) {
    sum += numbers[value];
}
avarage = sum / numbers.length;

console.log(avarage);