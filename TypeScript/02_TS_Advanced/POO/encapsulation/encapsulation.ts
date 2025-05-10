// public : O padrão, acessível de qualquer lugar.
// private : Acessível apenas dentro da própria classe.
// protected : Acessível dentro da classe e subclasses.

class Pessoa {
  private nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  public getNome(): string {
    return this.nome;
  }
  private ajustarNome(nome: string): void {
    this.nome = nome.trim();
  }
}
const pessoa1 = new Pessoa(" Maria ");
console.log(pessoa1.getNome()); // Saída: " Maria "
// pessoa1.ajustarNome("Maria") -> Erro: Método privado
