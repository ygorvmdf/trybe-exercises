let salario = 3500;
let salarioComINSS, salarioComIR;
if (salario <= 1556.94) {
    salarioComINSS = salario * 0.92;
} else if (salario > 1556.94 && salario <= 2594.92) {
    salarioComINSS = salario * 0.91;
} else if (salario > 2594.92 && salario <= 5189.82) {
    salarioComINSS = salario * 0.89;
} else if (salario > 5189.82) {
    salarioComINSS = salario - 570.88;
} else {
    console.log("erro: insira um valor valido")
}

console.log(salarioComINSS)
if (salario <= 1903.98){
    salarioComIR = salarioComINSS
} else if (salario > 1903.98 && salario <= 2826.65) {
    salarioComIR = salarioComINSS - ((0.075 * salarioComINSS) - 142.80)
} else if (salario > 2826.65 && salario <= 3751.05) {
    salarioComIR = salarioComINSS - ((0.15 * salarioComINSS) - 354.8)
} else if (salario > 3751.05 && salario <= 4664.68) {
    salarioComIR = salarioComINSS - ((0.225 * salarioComINSS) - 636.13)
} else if (salario > 4664.68) {
    salarioComIR = salarioComINSS - ((0.275 * salarioComINSS) - 869.36)
} 

console.log(salarioComIR)