

//Os parametros são como ingredientes para nossa função retornar o esperado.

//Declaração de Função (Function Declaration):
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); 

//Expressão de Função (Function Expression):
const multiplicar = function(a, b) {
  return a * b;
};
console.log(multiplicar(4, 5));  

//Arrow Function (ES6) simplificar código curto e direto:
const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); 


//Mas nem toda função precisa necessiramente retornar valors, como por exemplo:

function exibirMensagem(mensagem) {
  console.log(mensagem);
}

exibirMensagem("Bem-vindo ao curso!");  // Saída: Bem-vindo ao curso!


//Funções com Valor Padrão:
function somar(a = 0, b = 0) {
  return a + b;
}

console.log(somar(5));  // Saída: 5  pois (b = 0 por padrão)

//Funções de alta ordem são funções que recebem como parametro outras funções
    function calcular(a, b, operacao) {
    return operacao(a, b);
}
//As funções somar e multiplicar foram definidas previamente, lembrar sempre da ordem que um programa é executado. 
console.log(calcular(5, 3, somar));       // Saída: 8
console.log(calcular(5, 3, multiplicar)); // Saída: 15

//Função recursiva (A recursão é como se fosse uma pilha de chamadas, que aguarda até o caso base para retornarem na ordem inversa.)
function fatorial(n) {
  if (n === 0) return 1; // Essa é a condição de parada da recursão, conhecida como caso base.
  return n * fatorial(n - 1); //Essa é a recursão, a função retorna o valor de n multiplicado pelo fatorial de (n - 1). Então ela chama a si mesma com um valor menor (n - 1).

}

console.log(fatorial(5)); 

//Desafios
//Crie uma função que calcule o dobro de um número.
function dobro(num){
    return num * 2;
}
let num = 19;
console.log(`O dobro de ${num} é ${dobro(num)}`)

//Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.
function hny(nome)
{
return `Feliz ano novo! espero que você tenha um ótimo 2025 e bem-vindo à empresa , ${nome}`
}
console.log(hny("Caio"))
//Crie uma função que receba dois números e retorne o maior deles.
function maior(a, b)
{
    if (a > b){
    return `O maior número é o ${a}`
    }
    else if (b > a){
    return `O maior número é o ${b}`
    }
return ("Não há número maior")
}
let n1 = 100;
let n2 = 100;
let n3 = 400

console.log(maior(n1,n2))
//Implemente uma função que calcule a média de três números.
function ponderada3(n1,n2,n3){
    return (n1+n2+n3)/3
}
console.log(ponderada3(n1, n2, n3))

//Crie uma função que receba um array de números e retorne a soma deles.
function somador(numeros){
    let soma = 0; 
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]; 
    }
    return soma; 
}

//Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function tamanho (string){
    return string.length //length é uma propriedade das strings e arrays, não uma função. Portanto, não usa parênteses.
}
let texto = "Caio"
console.log(tamanho(texto))