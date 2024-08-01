var Cliente = /** @class */ (function () {
    //Construtor da classe
    function Cliente(id, nome, genero, email) {
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.email = email;
    }
    //Método
    Cliente.prototype.dados = function () {
        return console.log(this.id, this.nome, this.genero, this.email);
    };
    return Cliente;
}());
var Cliente1 = new Cliente(1, 'Marcos', 'M', 'marcos@gmail.com');
var Cliente2 = new Cliente(2, 'Barbara', 'F', 'barbara@gmail.com');
Cliente1.dados();
Cliente2.dados();
