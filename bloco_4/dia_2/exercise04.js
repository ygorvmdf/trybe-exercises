let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avarage = 0;

for (value in numbers) {
    sum += numbers[value];
}
avarage = sum / numbers.length;
console.log(avarage);

if (avarage > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}