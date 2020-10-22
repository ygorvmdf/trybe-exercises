const arrayPromise = new Promise((resolve, reject) => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 51);
        randomArray.push(Math.pow(randomNumber, 2));
    }
    const arraySum = randomArray.reduce((acc, curr) => acc + curr);
    if (arraySum < 8000) {
        resolve(arraySum);
    } else {
        reject("É mais de oito mil! Essa promise deve estar quebrada!");
    }
})

arrayPromise
  .then(result => [result / 2, result / 3, result / 5, result / 10])
  .then(result => result.reduce((acc, curr) => acc + curr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
