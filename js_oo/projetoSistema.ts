class Alocacao {
    idFuncionario: number;
    idProjeto: number;
    dataInicio: string;

    constructor(idFuncionario: number, idProjeto:number, dataInicio:string) {
        this.idFuncionario = idFuncionario;
        this.idProjeto = idProjeto;
        this.dataInicio = dataInicio;
    }
}

const alocacao1 = new Alocacao(1, 1, '08/08/2024');

console.log(`O projeto com o id ${alocacao1.idProjeto} está alocado para o funcionario com o id ${alocacao1.idFuncionario} com data de ínicio ${alocacao1.dataInicio}`)