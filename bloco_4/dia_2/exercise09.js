let twentyFiveArray = [];
for (let counter = 1; counter <= 25; counter += 1) {
    twentyFiveArray.push(counter);
}

for (value in twentyFiveArray) {
    console.log(twentyFiveArray[value] / 2);
}