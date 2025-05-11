// Classe Produto com propriedades como nome , preco , e desconto , além de métodos que calculam o preço final após o desconto.

class Produto {
  nome: string;
  preco: number;
  desconto: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = preco * 0.2;
  }
  precoComDesconto(): string {
    return `O preço após o desconto é ${this.preco - this.desconto} dol`;
  }
}
const bola = new Produto("jabulani", 100);
console.log(bola.preco);
console.log(bola.desconto);
console.log(bola.nome);
console.log(bola.precoComDesconto());

// Herança: classe ProdutoDigital que herda de Produto  adicionando uma nova propriedade linkDownload e sobrescrevendo o método que calcula o preço final.
class ProdutoDigital extends Produto {
  fabricante: string;
  constructor(nome: string, preco: number, fabricante: string) {
    super(nome, preco);
    this.fabricante = fabricante;
  }
  linkDownload() {
    return "Esse é o link para download do software";
  }
  precoComDesconto(): string {
    return `O preço após o desconto para os produtos digitais é ${
      this.preco - this.desconto * 0.5
    } dol`;
  }
}
const pc = new ProdutoDigital("macbook", 2000, "apple");

//Encapsulamento: Reescrevendo a classe Produto para tornar preco e desconto privados, criando métodos públicos para acessar e modificar essas propriedades de forma controlada.

class ProdutoEncapsulado {
  public nome: string;
  private preco: number;
  private desconto: number;

  constructor(nome: string, preco: number, desconto: number) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }
  getPreco(): number {
    return this.preco;
  }

  setPreco(novopreco: number): string {
    this.preco = novopreco;
    if (novopreco <= 0) {
      return `O preço não pode ser um número nulo ou negativo`;
    }
    return `O novo desconto estabelecido para o produto ${this.nome} é de ${novopreco}`;
  }
  getDesconto(): number {
    return this.desconto;
  }

  setDesconto(novodesconto: number): string {
    this.desconto = novodesconto;
    if (novodesconto > this.preco) {
      return `O desconto não pode ser maior que o preço.`;
    }
    return `O novo desconto estabelecido para o produto ${this.nome} é de ${novodesconto}`;
  }
}
const skate = new ProdutoEncapsulado("sk8", 100, 20);

// Polimorfismo: Uma classe ProdutoFisico que também herda de Produto , mas tem uma implementação diferente do cálculo de preço final, considerando o custo de envio.
class ProdutoFisico extends Produto {
  custoenvio: number;
  constructor(nome: string, preco: number, custoenvio: number) {
    super(nome, preco);
    this.custoenvio = custoenvio;
  }
  precoComDesconto(): string {
    return `Preço com desconto e envio: ${(
      this.preco -
      this.desconto +
      this.custoenvio
    ).toFixed(2)} dol`;
  }
}

// Classes Abstratas: Defina uma classe abstrata ContaBancaria com um método abstrato calcularJuros e implemente uma classes concretas como ContaCorrente

abstract class ContaBancaria {
  nome: string;
  private saldo: number;
  constructor(nome: string, saldo: number) {
    this.nome = nome;
    this.saldo = saldo;
  }
  accountInfo(): string {
    return `O dono da conta é ${this.nome} e o saldo é ${this.saldo}`;
  }
  protected getSaldo(): number {
    return this.saldo;
  }
  abstract calcularJuros(num: number): string;
}
class ContaCorrente extends ContaBancaria {
  constructor(nome: string, saldo: number) {
    super(nome, saldo);
  }

  calcularJuros(taxa: number = 0.01): string {
    return `O juros será de ${(this.getSaldo() * (1 + taxa)).toFixed(2)}`;
  }
}
