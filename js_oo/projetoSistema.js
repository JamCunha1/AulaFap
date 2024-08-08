var Alocacao = /** @class */ (function () {
    function Alocacao(idFuncionario, idProjeto, dataInicio) {
        this.idFuncionario = idFuncionario;
        this.idProjeto = idProjeto;
        this.dataInicio = dataInicio;
    }
    return Alocacao;
}());
var alocacao1 = new Alocacao(1, 1, '08/08/2024');
console.log("O projeto com o id ".concat(alocacao1.idProjeto, " est\u00E1 alocado para o funcionario com o id ").concat(alocacao1.idFuncionario, " com data de \u00EDnicio ").concat(alocacao1.dataInicio));
