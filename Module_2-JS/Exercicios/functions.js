
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