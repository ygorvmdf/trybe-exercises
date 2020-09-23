let custo = 10;
let venda = 150;
let custoReal = custo * 1.2;
let lucro = (venda - custoReal) * 1000
if (custo < 0 || venda < 0) {
    lucro = "erro: por favor informe um valor positivo."
}

console.log(lucro)