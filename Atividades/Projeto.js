const readline = require('readline-sync');

// diretor = {};
// diretor2 = {};

// diretor.name = readline.question('Digite o nome do diretor: ');
// diretor.quantosfilmes = parseInt(readline.question('Digite quantos filmes ele já dirigiu: '));

// filmes = [];
// filmes2 = [];

// function alternativa() {
//     opcao = parseInt(readline.question('Escolha uma opcao:\n1 - Para incluir mais um filme\n2 - Para ver lista de filmes incluidos\n3 - Adicionar outro diretor: \n4 - Para sair\nDigite uma opcao: '));
// }


// do {

//     filme = readline.question(`Digite um filme feito pelo diretor, ${diretor.name}: `);
//     filmes.push(filme)

//     alternativa()
//     switch (opcao) {
//         case 1:
//             readline.question(`Digite outro filme feito por ${diretor.name}: `);
//             filmes.push(filme);
//             break;
//         case 2: 
//             console.log(`Lista dos filmes do diretor ${diretor.name}: `);
//             filmes.forEach((filme, index) => {
//                 console.log(`${index + 1}. ${filme}`);  
//             });
//             if (length.filmes2 > 0) {
//                 console.log(`Lista dos filmes do diretor ${diretor2.name}: `);
//                 filmes2.forEach((filme2, index) => {
//                 console.log(`${index + 1}. ${filme2}`);  
//                 });
//             }
//             alternativa();
//             break;
//         case 3: 
//             diretor2.name = readline.question('Digite o nome do diretor: ');
//             diretor2.quantosfilmes = parseInt(readline.question('Digite quantos filmes ele já dirigiu: '));
//             filme2 = readline.question(`Digite um filme feito pelo diretor, ${diretor2.name}: `);
//             filmes2.push(filme2);
//             alternativa();
//             break;
//     }
// }   while (opcao != 4);
// console.log('Você saiu do programa.')

diretor = {}

diretor.nome = readline.question('Digite o nome do diretor: ');
diretor.contador = readline.question('Digite quantos filmes ele dirigiu: ');
diretor.filmes = {};
diretor.filmes.nome = [] = readline.question(`Digite o nome do filme que o ${diretor.nome} dirigiu`);