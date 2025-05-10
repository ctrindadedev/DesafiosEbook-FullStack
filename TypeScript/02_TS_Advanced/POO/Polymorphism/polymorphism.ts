//Polimorfimo permite permite que métodos em classes derivadas tenham a mesmaassinatura, mas comportamentos diferentes em  TS isso é feito da seguinte maneira:

class Gato extends Animal {
  emitirSom(): string {
    return `${this.nome} mia!`;
  }
}
const meuGato = new Gato("Mimi", 3);
console.log(meuGato.emitirSom()); // Saída: "Mimi mia!"
console.log(Knox.emitirSom()); //Saída: return "Knox, o douberman, late!";
