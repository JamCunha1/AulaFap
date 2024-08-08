var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classe Usuário ou modelo
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    // constructor(nomeUsuario:string){
    //     this.nomeUsuario = nomeUsuario;
    // }
    //Metodos: atribuindo valor
    Usuario.prototype.setnomeUsuario = function (_nomeUsuario) {
        this.nomeUsuario = _nomeUsuario;
    };
    //Metodo recuperar valor 
    Usuario.prototype.getnomeUsuario = function () {
        return this.nomeUsuario;
    };
    return Usuario;
}());
// class Adm extends Usuario {
//     nomeAdm: string;
//     constructor(nomeAdm: string, nomeUsuario: string) {
//         super(nomeUsuario);
//         this.nomeAdm = nomeAdm;
//     }
// }
var Usuario1 = new Usuario();
Usuario1.setnomeUsuario("Barbara");
console.log(Usuario1.getnomeUsuario());
// const Adm1 = new Adm('Barbara', 'Jaam');
// console.log(Adm1.nomeUsuario, Adm1.nomeAdm);
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cliente.prototype.setnomeCliente = function (_nomeCliente) {
        this.nomeCliente = _nomeCliente;
    };
    Cliente.prototype.getnomeCliente = function () {
        return this.nomeCliente;
    };
    return Cliente;
}(Usuario));
//Objeto Cliente
var Cliente1 = new Cliente();
Cliente1.setnomeUsuario('001');
Cliente1.setnomeCliente('Barbara');
console.log(Cliente1.getnomeCliente(), Cliente1.getnomeUsuario());
