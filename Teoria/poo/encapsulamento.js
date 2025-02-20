//Encapsulamento serve para privarmos informações que não queremos que qualquer um possa acessar por qualquer metódo, apenas por funções especificas
//Esse conceito nos faz pensasr sobre outro conceito: A abstração. Que é justamente mostrar ao usuário apenas o que ele tem interesse. Não toda a "Mecãnica por trás"

//Desafios

//Crie uma classe `ContaBancaria` que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.
class ContaBancaria {
  #saldo;
    constructor(saldo){
      this.#saldo = saldo;
    }
  depositar(valor){
    this.#saldo = this.#saldo+valor
    console.log(`O valor de ${valor} foi depositado na sua conta.`)
  }

  consultar_saldo(){
    console.log(`O saldo é de ${this.#saldo}`)
  }

  sacar(valor){
    if(valor > this.#saldo){
      console.log(`Saldo insuficiente`)
    }
    else{
      console.log(`Sacando ${valor} reais...`)
    }
  }
}
let bradesco = new ContaBancaria(1000) 

bradesco.consultar_saldo()
bradesco.depositar(1000)
bradesco.consultar_saldo()
bradesco.sacar(2001)

//Implemente uma classe `Usuario` que armazena uma senha privada e permite alterar a senha com validação.
class Usuario{
  #senha;
  constructor(nome, senha)
{
  this.nome = nome
  this.#senha = senha
}
validarSenha(senha){
  if(senha === this.#senha){
    console.log("A senha é válida.")
    return true;
  }
  else{
    console.log("A senha não é válida.")
    return false;
    }
}
alterarSenha(validador,senha_nova){
  if (validador === true){
    this.#senha = senha_nova
  console.log("Senha alterada com sucesso.")
  }
  else
  {
    console.log("A senha não foi alterada")
  }
}
consultarSenha(){
  console.log(`Sua senha atual é ${this.#senha}`)
}
}
let user = new Usuario("Caio", "0510")
user.validarSenha("0511")
let validacao = user.validarSenha("0510")
user.alterarSenha(validacao,"c005105m")
user.consultarSenha()


//Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.
class ControleRemoto{
  #estado_interno;
  constructor(marca, estado_interno){
    this.marca = marca
    this.#estado_interno = estado_interno;
  }
  desligar(estado) {
  estado = "Desligada";
  this.#estado_interno = estado
  console.log("Ação Executada.")
  }  
  ligar(estado) {
  estado = "Ligada";
  this.#estado_interno = estado
  console.log("Ação Executada.")
  }  
consultar(){
  console.log(`A TV está ${this.#estado_interno}.`)
}
}
let lg = new ControleRemoto("LG", "Desligada")
lg.consultar()
lg.ligar()
lg.consultar()
lg.desligar()
lg.consultar()
//Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha
class Cofre {
  #senha;
  #dinheiro;
  constructor(senhaInicial, dinheiro) {
    this.#senha = senhaInicial;
    this.#dinheiro = dinheiro
  }

  alterarSenha(novaSenha) {
    this.#senha = novaSenha;
  }

  verificarSenha(senha) {
    return this.#senha === senha;
    
  }
  verificarDinheiro(validador){
  if(validador === true){
    console.log(`O dinheiro que está no cofre é: ${this.#dinheiro} reais`)
  }
  else{
    console.log("A senha está incorreta.")
  }
}
}

const meuCofre = new Cofre("1234", 10000);
let validador = meuCofre.verificarSenha("1234");
meuCofre.verificarDinheiro(validador)


//Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.