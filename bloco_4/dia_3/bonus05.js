let n = 11;
let middleSpaces = "";
let leftSpaces = "";
let holder = "";
let temp = 0;
let temp2 = 0;

for (let i = 1; i <= n; i += 1) {
    if (i == 1 || i == n) {
        for (let k = 0; k < i; k += 1) {
            holder += "*"
        }
        temp = (n - i) / 2;
        for (let j = 0; j < temp; j += 1) {
            leftSpaces += " ";
        }
        console.log(leftSpaces + holder)
        leftSpaces = "";
        holder = "";
    } else if (i % 2 == 1) {
        temp = (n - i) / 2;
        for (let j = 0; j < temp; j += 1) {
            leftSpaces += " ";
        }
        temp2 = i - 2
        for (let h = 0; h < temp2; h += 1) {
            middleSpaces += " ";
        }
        console.log(leftSpaces + "*" + middleSpaces + "*");
        leftSpaces = "";
        middleSpaces = "";
    }
}