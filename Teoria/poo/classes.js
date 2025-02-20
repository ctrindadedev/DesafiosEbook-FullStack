//Objetos são instâncias de uma classe, ou seja a classe é o molde e objetos são criados apartir desse modo
//Classe:  Carro ; Objeto: Toyota
//Objetos tem atributos (caracteristicas) e Ações (Funções dentro de um objeto - Metodos)
class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca; // Atributo
    this.modelo = modelo;
    this.cor = cor;
    //This é uma variável para entender o contexto com base no objeto que foi criado.
  }

  acelerar() { // Método
    console.log(`${this.marca} está acelerando! 🚗💨`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", "Branco"); // O que está sendo colocado dentro do parenteses é passado como parametros para nosso constructor
meuCarro.acelerar(); // Saída: Toyota está acelerando! 🚗💨
console.log(meuCarro.cor)

//Desafios 
// Crie uma classe chamada `Livro` com atributos `titulo`, `autor` e `ano`. Adicione um método para exibir os detalhes do livro.
class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    detalhes(){
        console.log(`Essas são as informações disponivéis referente ao livro: Seu título é  "${this.titulo}", do autor(a) ${this.autor}, e o ano de lançamento é: ${this.ano}`)
    }
}
let livrito = new Livro("Caio de Medeiros - Tentanto ser alguém", "Caio Trindade", "2025")
livrito.detalhes()

// Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.
class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }
    sacar(valor){

        if(valor >= this.saldo){
        console.log(`O valor de ${valor} que você deseja sacar não será liberado, pois ultrapassa o limite do seu saldo.`)
        }
        else{
        console.log(`Sacando ${valor} reais, aguarde.`)
        }
    }
    depositar(valor){
        console.log(`O valor de ${valor} foi depositado na sua conta, agora o nomo saldo é ${this.saldo+valor}`)
    }
}
let saldo = 1000;
let valor = 999;
let depositar = 200;
let conta = new ContaBancaria(saldo)
conta.sacar(valor)
conta.depositar(depositar)

//Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    saudacao(){
        console.log(`Bem-vindo, ${this.nome}`)
    }
}
const melhor = new Pessoa("Caio Trindade de Medeiros")
melhor.saudacao()
//Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.
class Calculadora{
    constructor(n1,n2){
        this.n1 = n1;
        this.n2 = n2;
    }
    somar(){
        console.log((`A soma de ${this.n1} e ${this.n2} é igual a ${this.n1+this.n2}`))
    }
    sub(){
console.log((`A subtração de ${this.n1} e ${this.n2} é igual a ${this.n1-this.n2}`))
    }
    mult(){
console.log((`A multplicação de ${this.n1} e ${this.n2} é igual a ${this.n1*this.n2}`))
    }
    div(){
    console.log((`A divisão de ${this.n1} por ${this.n2} é igual a ${this.n1/this.n2}`))

    }
}
const n1 = 100; 
const n2 = 5;
let calcultador = new Calculadora(n1, n2)
calcultador.somar()
calcultador.sub()
calcultador.mult()
calcultador.div()
//Crie uma classe `Agenda` para armazenar e exibir contatos.
let contatos = ["Mamãe, Ribamar, Pedro, Beneboy, Bianca"]
class Agenda{
    constructor(nome, contatinhos)
    {
        this.nome = nome
        this.contatinhos = contatinhos
    }
adicionar(nome_contato){
    this.contatinhos.push(nome_contato)
    console.log(`${nome_contato} foi adicionado a lista de contatos. Sua lista de contatos agora é: ${this.contatinhos}`)
}
mostrar(){
    console.log(`Olá, ${this.nome}. Sua lista de contatos é: ${this.contatinhos}`)
}
}
let contatos_caio = new Agenda("Caio Trindade", contatos)
contatos_caio.mostrar()
contatos_caio.adicionar("Ana Mello")
contatos_caio.mostrar()