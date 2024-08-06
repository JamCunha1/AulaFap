"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var contador = 0;
while (contador < 3) {
    var n1 = parseInt(readline.question("Digite a primeira nota: "));
    var n2 = parseInt(readline.question("Digite a segunda nota: "));
    var resultado = (n1 + n2) / 2;
    if (resultado === 10) {
        console.log('Aprovado com distinção');
    }
    else if (resultado >= 7) {
        console.log('Aprovado com média', resultado);
    }
    else if (resultado < 7) {
        console.log('Reprovado com média', resultado);
    }
    contador = contador + 1;
}
