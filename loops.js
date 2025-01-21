
//for é usado quando você sabe exatamente quantas vezes deseja repetir o código.
for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}

//while repete o código enquanto uma condição for verdadeira.
let contador = 0;
while (contador < 3) {
  console.log(`Contando: ${contador}`);
  contador++;
}

//Semelhante ao while, mas garante que o código seja executado pelo menos uma vez antes de verificar a condição.
let numero = 5;
do {
  console.log(`Executando...`);
  numero--;
} while (numero > 5);

//Break e Continue 
//Break Interrompe o loop antes de completar todas as iterações.
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
//Continue
//Pula para a próxima iteração sem executar o restante do código na atual.
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Saída: 0, 1, 3, 4
console.log("Desafios")
//Desafios
    //Use um loop `for` para imprimir os números de 1 a 10 no console.
    for(let i = 1; i < 11; i++)
        console.log(i)

    //Crie uma lista de nomes e use um `for` para exibir cada nome.
    let nome = ["Caio", "Ribamar", "Ana", "Marcelo", "David", "Brian", "Senku"]
    for(let i=0; i< nome.length; i++)
    {
        console.log(nome[i])
    }
    //Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.
    let numeros = [10, 9, 8, 6, 5, 4, 3, 2, 100]
for (let i = 0; i < numeros.length; i++) {
    console.log("Procurando...");
    if (numeros[i] > 10) {
        console.log(`Número encontrado na posição ${i}`); // Exibe o índice correto
        break; // Interrompe o loop após encontrar o número
    }
}

    //Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.
let num = 10;
while (num > 0){
    console.log(num)
    num--
    if (num === 0){
        console.log("Lançamento!")
        break;
    }
}

    //Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).
let numbre = 5;
let resultado = 1; 

for (let i = 1; i <= numbre; i++) {
    resultado *= i; // Multiplica o valor atual de resultado por i
}

console.log(`O fatorial de ${numbre} é: ${resultado}`);
    