//Desafios Herança

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