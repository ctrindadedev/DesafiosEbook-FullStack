// Classes abstratas não podem ser instanciadas diretamente e são usadas como base para outras classes. Elas podem conter métodos abstratos que devem ser  implementados nas classes derivadas.
abstract class Forma {
  abstract calcularArea(): number;

  exibirArea(): void {
    console.log(`A área é: ${this.calcularArea()}`);
  }
}
class Quadrado extends Forma {
  lado: number;
  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}
const meuQuadrado = new Quadrado(4);
meuQuadrado.exibirArea(); // Saída: "A área é: 16"

//Interfaces também podem ser usadas com um propósito semelhante (Definir contratos que a classe deve seguir)
interface Movel {
  mover(distancia: number): void;
}
class Carro implements Movel {
  mover(distancia: number): void {
    console.log(`O carro moveu ${distancia} metros.`);
  }
}
const meuCarro = new Carro();
meuCarro.mover(10); // Saída: "O carro moveu 10 metros."
