//Classe Usuário ou modelo
class Usuario{
    //Atributos
    private nomeUsuario: string;

    // constructor(nomeUsuario:string){
    //     this.nomeUsuario = nomeUsuario;
    // }

    //Metodos: atribuindo valor
    setnomeUsuario(_nomeUsuario){
        this.nomeUsuario = _nomeUsuario
    }

    //Metodo recuperar valor 
    getnomeUsuario(){
        return this.nomeUsuario
    }
}

// class Adm extends Usuario {

//     nomeAdm: string;

//     constructor(nomeAdm: string, nomeUsuario: string) {
//         super(nomeUsuario);
//         this.nomeAdm = nomeAdm;

//     }
// }

const Usuario1 = new Usuario();

Usuario1.setnomeUsuario("Barbara");

console.log(Usuario1.getnomeUsuario());

// const Adm1 = new Adm('Barbara', 'Jaam');

// console.log(Adm1.nomeUsuario, Adm1.nomeAdm);

class Cliente extends Usuario {
    private nomeCliente: string;

    setnomeCliente(_nomeCliente: string) {
        this.nomeCliente = _nomeCliente;
    }
    getnomeCliente() {
        return this.nomeCliente;
    }
}

//Objeto Cliente
const Cliente1 = new Cliente();
Cliente1.setnomeUsuario('001');
Cliente1.setnomeCliente('Barbara');

console.log(Cliente1.getnomeCliente(), Cliente1.getnomeUsuario());


