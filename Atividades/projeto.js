const readline = require('readline-sync');

diretor = {} = [];

function menu(){
    opcao = parseInt(readline.question('Escolha uma opcao\n\n1 - Incluir filme\n2 - Listar filmes\n3 - Incluir diretor\n\n4 - Sair'))
}

function IncluirDiretor(){
    nome = readline.question('Digite o nome do diretor: ')
    diretor.nome.push(nome)
}