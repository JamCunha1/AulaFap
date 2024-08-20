class Cliente{
    //construtor da classe cliente
    constructor (n, g, e, a, i){
        this.nome = n
        this.genero = g
        this.email = e 
        this.age = a
        this.id = i
    }
    //metodo da classe cliente
    exibirDetalhes(){
        console.log(this.nome);
        console.log(this.genero);

    }
}

const cliente = new Cliente('Jamerson', 'Masculino', 'jamerson.a@hot', '26', '15')
const cliente2 = new Cliente('Maria', 'Feminino', 'maria@gmail.com', '30', '12' )
console.log(cliente.nome, cliente.genero, cliente.email);
console.log(cliente2.nome, cliente2.genero, cliente2.email);

