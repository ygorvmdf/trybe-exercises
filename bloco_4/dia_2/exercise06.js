let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;

for (value in numbers) {
    if (numbers[value] % 2 == 1){
        counter += 1;
    }
}

console.log(`Esta array possui ${counter} numeros impares.`)