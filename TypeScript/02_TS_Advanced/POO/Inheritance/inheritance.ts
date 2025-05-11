class Animal {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  emitirSom(): string {
    return `${this.nome} faz um som!`;
  }
}
const cachorro = new Animal("Rex", 5);
console.log(cachorro.emitirSom()); // Saída: "Rex faz um som!"

class Cachorro extends Animal {
  raca: string;
  constructor(nome: string, idade: number, raca: string) {
    super(nome, idade);
    this.raca = raca;
  }

  informarRaca = (): String => {
    return `A minha raça é ${this.raca}`;
  };
  emitirSom(): string {
    return `${this.nome}, o ${this.raca}, late!`;
  }
}
const Knox = new Cachorro("Knox", 10, "Douberman");
Knox.emitirSom();
Knox.informarRaca();
