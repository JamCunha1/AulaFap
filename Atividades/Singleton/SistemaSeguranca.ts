class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaCorreta: string = "senhaSuperSecreta";

    private constructor() {
        // Construtor privado para garantir que a classe não seja instanciada fora
    }

    public static obterInstancia(): SistemaSeguranca {
        if (this.instancia === null) {
            this.instancia = new SistemaSeguranca();
        }
        return this.instancia;
    }

    public acessarBaseSecreta(senha: string): string {
        if (senha === this.senhaCorreta) {
            return "Acesso concedido à Base Secreta!";
        } else {
            return "Acesso negado. Senha incorreta.";
        }
    }
}

// Exporta a classe para uso em outros arquivos
export default SistemaSeguranca;
