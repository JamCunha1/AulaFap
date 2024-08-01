class Cliente{
  id:number;
  nome:string;
  genero:string;
  email:string;

  //Construtor da classe
  constructor(id:number, nome:string, genero:string, email:string){
    this.id = id;
    this.nome = nome;
    this.genero = genero;
    this.email = email;
  }

  //Método
  dados() {

    return console.log(this.id, this.nome, this.genero, this.email);
  }
}

const Cliente1 = new Cliente(1, 'Marcos', 'M', 'marcos@gmail.com')
const Cliente2 = new Cliente(2, 'Barbara', 'F', 'barbara@gmail.com')

Cliente1.dados()
Cliente2.dados()

