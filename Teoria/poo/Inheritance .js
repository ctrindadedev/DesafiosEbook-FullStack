//A herança permite que uma classe aproveite os atributos e métodos de outra classe, eliminando a necessidade de duplicar código. 
// É como uma relação de pai e filho: o filho herda características do pai, mas também pode ter suas próprias.
//Certifique-se de que sobrescrever métodos não cause comportamento inesperado.
//Herança é ótima para evitar duplicação, mas mantenha as classes coesas e com responsabilidades claras. - Nem tudo precisa de Herança
    
//Superclasse que será a base dos atributos e metódos das classes-filhas (Subclasse)

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} está fazendo um som! 🐾`);
  }
}
//Declarando uma Subclasse
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da superclasse
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome}, da raça ${this.raca}, está latindo! 🐶`);
  }
}

//Além disso, uma subclasse pode sobrescrever metódos da superclasse (Override)
class Gato extends Animal {
  fazerSom() {
    console.log(`${this.nome} disse Miau! 🐱`);
  }
}
const meuGato = new Gato("Pedro");
const Nina = new Cachorro("Nino", "Shitzu")
Nina.latir()
meuGato.fazerSom();


//1. Crie uma classe `Veiculo` e duas subclasses: `Carro` e `Moto`. Adicione métodos específicos para cada subclasse.
class Veiculo{
    constructor(ano, marca){
        this.ano = ano;
        this.marca = marca
    }
info(){
    console.log(`A marca do veículo é ${this.marca} e foi fabricado no ano de ${this.ano}`)
}
}
class Carro extends Veiculo{
    constructor(ano, marca, modelo){
        super(ano, marca);
        this.modelo = modelo;
    }
drift(){
    console.log(`${this.modelo} está fazendo drift! 🚗💨`)
}
}
class Moto extends Veiculo{
    constructor(ano, marca, modelo){
        super(ano, marca);
        this.modelo = modelo;

    }
grau(){
    console.log(`${this.modelo} está dando grau! 🏍️💨`)
}
}
const carrin = new Carro(2020, "Ferrari", "Ferrari 488 Pista Spider")
const motoca = new Moto(2015,"Honda", "CG 160" )
motoca.info()
motoca.grau()
carrin.info()
carrin.drift()
//2. Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.
class Funcionario{
    constructor(nome,tempo_de_empresa, cargo){
        this.cargo = cargo;
        this.tempo_de_empresa = tempo_de_empresa;
        this.nome = nome;
    }
info(){
    console.log(`O funcionário ${this.nome}, está na empresa fazem ${this.tempo_de_empresa} meses e atualmente trabalha como ${this.cargo}`)
}
}
class Gerente extends Funcionario{
    constructor(nome,tempo_de_empresa, setor){
        super(nome,tempo_de_empresa);
        this.cargo = "Gerente"
        this.setor = setor
    }
info_gerente(){
    console.log(`O funcionário ${this.nome}, está na empresa fazem ${this.tempo_de_empresa} meses e atualmente trabalha como ${this.cargo} no setor de ${this.setor}`)    
}
}
const operador = new Funcionario("Roberto", 6,"Escravo")
const gerente = new Gerente("Felipe",16, "Financeiro")
gerente.info()
operador.info()
gerente.info_gerente()

//3. Crie uma superclasse `Forma` com um método para calcular área, e subclasses como `Quadrado` e `Círculo` que sobrescrevam esse método.
class Forma{
    constructor(nome, base, altura){
        this.nome = nome
        this.base = base
        this.altura = altura
    }
area(){
    let resultado = this.base*this.altura
    console.log(`A área do ${this.nome} é ${resultado}`)
}
}
class Quadrado extends Forma{
    constructor(nome, lado){
        super(nome)
        this.lado = lado
    }
    area(){
        let resultado = this.lado**2
        console.log(`O resultado da área do quadrado de lado ${this.lado} é ${resultado}`)
    }
}
class Circulo extends Forma{
    constructor(nome, raio){
        super(nome)
        this.raio = raio
    }
area(){
    let resultado = (this.raio**2)*Math.PI
    console.log(`O resultado da área do circulo de raio ${this.raio} é ${resultado}`)
}
}
let retangulo = new Forma("Retângulo", 10, 5)
retangulo.area()
let aro = new Circulo("Aro", 10);
let quadro = new Quadrado("Quadro", 10)
aro.area()
quadro.area()

//4. Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo