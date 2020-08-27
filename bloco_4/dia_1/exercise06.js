let pecaXadrex;
pecaXadrex = "cavalo";
console.log("teste")
switch (pecaXadrex.toLowerCase) {
    case "cavalo":
        console.log("movimento em L");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "torre":
        console.log("linha reta para direita e lados");
        break;
    case "peao":
        console.log("uma casa para frente e come na diagonal");
        break;
    case "rainha":
        console.log("movimento livre na diagonal e laterais");
        break;
    case "rei":
        console.log("uma casa diagonal ou laterais");
        break;
}