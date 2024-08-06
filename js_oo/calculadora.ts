import * as readline from 'readline-sync'

let contador = 0

while (contador < 3) {
    let n1: number = parseInt(readline.question("Digite a primeira nota: "));
    let n2: number = parseInt(readline.question("Digite a segunda nota: "));

    let resultado: number = (n1 + n2) / 2;

    if (resultado === 10){
        console.log('Aprovado com distinção');
    }else if (resultado >= 7) {
        console.log('Aprovado com média', resultado );
    }else if (resultado < 7) {
        console.log('Reprovado com média', resultado);
    }
    contador = contador + 1;
}

