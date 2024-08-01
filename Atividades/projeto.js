class Projeto{
  idProjeto
  nomeProjeto
  dataInicioProjeto

  constructor(idProjeto, nomeProjeto, dataInicioProjeto){
      this.idProjeto = idProjeto;
      this.nomeProjeto = nomeProjeto;
      this.dataInicioProjeto = dataInicioProjeto;
  }

  exibirProjeto(){
      console.log(`Projeto: ${this.idProjeto} - ${this.nomeProjeto} foi iniciado no dia ${this.dataInicioProjeto}`);
  }
}

class Alocacao{
  idProjeto
  idFuncionario
  dataInicioAlocacao

  constructor(idProjeto, idFuncionario, dataInicioAlocacao){
      this.idProjeto = idProjeto;
      this.idFuncionario = idFuncionario;
      this.dataInicioAlocacao = dataInicioAlocacao;
  }

  exibirAlocacao(){
      console.log(`O projeto ${this.idProjeto} alocado no dia ${this.dataInicioAlocacao}, esta sendo desenvolvido pelo funcionario ${this.idFuncionario} - ${this.nome}. `)
  }
}

class Funcionario{
  idFuncionario
  nomeFuncionario
  cargoFuncionario

  constructor(idFuncionario, nomeFuncionario, cargoFuncionario){
    this.idFuncionario = idFuncionario;
    this.nomeFuncionario = nomeFuncionario;
    this.cargoFuncionario = cargoFuncionario;
  }

  exibirFuncionario(){
    console.log(`${this.idFuncionario} - ${this.nomeFuncionario} cargo: ${this.cargoFuncionario}`)
  }
}