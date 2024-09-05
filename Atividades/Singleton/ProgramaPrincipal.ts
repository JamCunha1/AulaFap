import SistemaSeguranca from './SistemaSeguranca';

function main() {
    const sistemaSeguranca = SistemaSeguranca.obterInstancia();
    
    const senha1 = "senhaSuperSecreta";
    const senha2 = "senhaErrada";

    console.log(sistemaSeguranca.acessarBaseSecreta(senha1)); // Esperado: Acesso concedido à Base Secreta!
    console.log(sistemaSeguranca.acessarBaseSecreta(senha2)); // Esperado: Acesso negado. Senha incorreta.

    // Testando que apenas uma instância é criada
    const outraInstancia = SistemaSeguranca.obterInstancia();
    console.log(sistemaSeguranca === outraInstancia); // Esperado: true
}

main();
