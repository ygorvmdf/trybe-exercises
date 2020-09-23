let n = 10;
/* variavel que guardara os "*"*/
let holder = "";
/* variavel que guardara os espacos */
let spaces = "";

/* o primeiro for e pra imprimir cada linha */
for (let i = 1; i <= n; i += 1) {
    /* o indice do loop diz a linha que ele esta, e ele imprimira o numero de asteriscos correspondente o humero de linha e o 
    resto preenchera com espacos vazios a esquerda.*/
    for (let j = 0; j < n; j += 1) {
        if (j < (n - i)) {
            spaces += " ";
        } else {
            holder += "*";
        }
    }
    console.log(spaces + holder)
    spaces = "";
    holder = "";
}
