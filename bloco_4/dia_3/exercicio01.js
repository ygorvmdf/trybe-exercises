/* a variavel n vai dizer o tamanho do quadrado, tera que ser maior que 1*/
let n = 7;
/* variavel que vai guardar os "*" concatenados */
let colonm = "";

/* cirando um for loop para imprimir o numero de linhas */
for (let i = 0; i < n; i += 1) {
    /* criando outro for loop que vai imprimir as colunas */
    for (let j = 0; j < n; j += 1) {
        colonm += "*";
    }
    /* printando linha por linha */
    console.log(colonm);
    /* zerando o valor de colonm para nao acumular */
    colonm = "";
}