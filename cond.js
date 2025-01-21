//No JavaScript, as principais formas de tomar decisões são:
//if e else: Executa um bloco de código se uma condição for verdadeira, e outro bloco caso contrário.
//else if: Permite testar várias condições.
//switch: Ideal para quando você precisa verificar muitas possibilidades de forma mais limpa.

let numero = 7;

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}
let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default: //Funciona como um Else
    console.log("Outro dia");
}

let opcao = "Saldo";

switch (opcao) {
  case "pagar":
    console.log("Processando pagamento...");
    break;
  case "cancelar":
    console.log("Cancelando pedido...");
    break;
  default:
    console.log("Opção inválida!");
}
//Desafios
//1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.
let hora = 10;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}

//2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).
let mes = 1;
switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho") ;
        break;   
    case 8:
        console.log("Agosto");
            break; 
    case 9:
        console.log("Setembro");
        break;    
    case 10:
        console.log("Outubro");
        break;    
    case 11:
        console.log("Novembro");
        break;    
    case 12:
        console.log("Dezembro");
        break;
};

//3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".
//Operador Ternário
let idade = 10
let mensagem = idade >= 18 ? "Pode dirigir 🎉" : "Não pode dirigir ❌";  //Se a var idade for true, o output será a 1st frase, senão será a segunda.
console.log(mensagem)
//4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".
let saldo = 1000
mensagem_saldo = saldo >= 1000 ? "Médio" : "Saldo de Pobre"
console.log(mensagem_saldo)
//5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
let number = 1;
if (number > 0)
    console.log("É positivo")
else if (number < 0)
    console.log("É negativo")
else
    console.log("É nulo")


//6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.
    switch(opcao){
        case "Sacar":
            console.log("Sacando seu dinheiro");
            break;
        case "Depositar":
            console.log("Quanto deseja depositar?");
            break;
        case "Saldo":
            console.log(`Seu saldo é: ${saldo}`);
            break;
            default:
            console.log("Operação inválida")

    }