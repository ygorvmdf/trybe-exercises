let n = 11;
let holder = "";
let spaces = "";
let temp = 0;

for (let i = 0; i <= n; i += 1) {
    if (i % 2 == 1 || i == 1){
        for (let k = 0; k < i; k += 1) {
            holder += "*"
        }
        temp = (n - i) / 2;
        for (let j = 0; j < temp; j += 1) {
            spaces += " ";
        }
        console.log(spaces + holder)
        spaces = "";
        holder = "";
    } 
}