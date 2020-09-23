let n = 11;
let counter = 0;

for (let i = 1; i <= n; i += 1) {
    if (n % i == 0) {
        counter += 1;
    }
}
if (counter > 2) {
    console.log(`O numero ${n} nao e primo!`)
} else {
    console.log(`O numero ${n} e primo!`)
}