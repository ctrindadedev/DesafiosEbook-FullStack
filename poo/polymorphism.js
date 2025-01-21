//O polimorfismo permite que métodos com o mesmo nome se comportem de maneiras diferentes, dependendo do contexto ou da classe que os implementa. 
//Isso ajuda a escrever códigos mais flexíveis, reutilizáveis e extensíveis. Basicamente sobrescrever um metódo a depender do contexto.
//Certifique-se de que a implementação específica de um método em uma subclasse faz sentido no contexto.
//O polimorfismo ajuda a reduzir o acoplamento entre partes do sistema, facilitando futuras alterações ou extensões.
//Reutilize ao máximo os métodos da superclasse antes de sobrescrevê-los.

   //Desafios

//Crie uma classe `Funcionario` com um método `calcularSalario`. Implemente subclasses como `Desenvolvedor` e `Gerente` que sobrescrevem esse método.

//Implemente uma classe `Transporte` e subclasses como `Carro`, `Avião` e `Barco`, cada uma com seu método `mover`.
class Transporte{
    constructor(velocidade)
    {
        this.velocidade = velocidade
    }
mover(){
    console.log(`O transporte está se movendo numa velocidade de ${this.velocidade} km/h`)
}
}
class Moto extends Transporte{
    constructor(velocidade){
        super(velocidade)
    }
mover(){
    console.log(`A mota está se movendo na pista numa velocidade de ${this.velocidade} km/h`)
}
}
class Carro extends Transporte{
    constructor(velocidade){
        super(velocidade)
    }
mover(){
    console.log(`O carro está se movendo na pista numa velocidade de ${this.velocidade} km/h`)
}
}
class Navio extends Transporte{
    constructor(velocidade){
        super(velocidade)
    }
mover(){
    console.log(`O navio está navegando no mar numa velocidade de ${this.velocidade*50} km/h`)
}
}
class Aviao extends Transporte{
    constructor(velocidade){
        super(velocidade)
    }
mover(){
    console.log(`O avião está voando numa velocidade de ${this.velocidade*1000} km/h`)
}
}
let barco = new Navio(40)
let carrão = new Carro(40)
let honda = new Moto(40)
let aviaion = new Aviao(40)
let veiculo = new Transporte(40)
barco.mover()
carrão.mover()
honda.mover()
aviaion.mover()
veiculo.mover()

//Crie uma superclasse `Documento` com um método `exibirConteudo`, e subclasses como `PDF` e `Word` que personalizem esse método.
class Documento{
    constructor(nome, tamanho){
        this.nome = nome
        this.tamanho = tamanho
    }
exibirConteudo(){
    console.log("Exibindo o contéudo no formato .txt")
}
}
class DocumentoPdf extends Documento{
    constructor(nome, tamanho){
        super(nome,tamanho);
    }
    exibirConteudo(){
    console.log("Exibindo o contéudo no formato .pdf")
}
}
class DocumentoDoc extends Documento{
    constructor(nome, tamanho){
        super(nome,tamanho);
    }
    exibirConteudo(){
    console.log("Exibindo o contéudo no formato .doc")
}
}
let trabalho = new Documento("Diário de um ninguém", "30kb")
trabalho.exibirConteudo()
let trabalho2 = new DocumentoPdf("Diário de um ninguém", "30kb")
trabalho2.exibirConteudo()
let trabalho3 = new DocumentoDoc("Diário de um ninguém", "30kb")
trabalho3.exibirConteudo()

//Use o polimorfismo para criar uma lista de diferentes formas geométricas (`Quadrado`, `Círculo`, etc.) e calcule suas áreas.                        

class Forma{
area(){
    console.log("Defina a figura para receber a área correspondente")
}
}
class Quadrado extends Forma{
    constructor(lado){
        super();
        this.lado = lado
    }
    area(){
        let resultado = this.lado**2
        console.log(`O resultado da área do quadrado de lado ${this.lado} é ${resultado}`)
    }
}
class Circulo extends Forma{
    constructor(raio){
        super();
        this.raio = raio
    }
area(){
    let resultado = (this.raio**2)*Math.PI
    console.log(`O resultado da área do circulo de raio ${this.raio} é ${resultado}`)
}
}
class Triangulo extends Forma{
    constructor(base,altura){
        super();
        this.base = base
        this.altura = altura
    }
area(){
    let resultado = (this.base*this.altura)/2
    console.log(`O resultado da área do triângulo informado é ${resultado}`)
}
}
let triangulo = new Triangulo(10, 5)
let aro = new Circulo(10);
let quadro = new Quadrado(10)
aro.area()
quadro.area()
triangulo.area()