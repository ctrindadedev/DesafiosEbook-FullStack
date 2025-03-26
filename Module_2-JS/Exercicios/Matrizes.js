//Desafios

//Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.
let linhas = 3;
let colunas = 3;
let matriz3 = [];
let n = 1;
for (let i = 0; i < linhas; i++){
  matriz3[i] = [];
  for (let j= 0; j < colunas; j++){
    matriz3[i][j] = n++
  }
  }
  //Usar variaveis para evitar <empty item>
console.log(matriz3) 

//Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.

function somador(matriz){ 
let total = 0;
for (let i = 0; i < matriz.length; i++){ //matriz.length é o mesmo que a variável linhas
  for (let j= 0; j < matriz[i].length; j++){ //O mesmo que a variável coluna
    total += matriz[i][j]
  }
  }
  return total
}
console.log(somador(matriz3))


//Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".
let linhas2 = 8;
let colunas2 = 8;
let tabuleiro = [];

// Criando o tabuleiro 8x8 diretamente com símbolos
for (let i = 0; i < linhas2; i++) {
  tabuleiro[i] = [];
  for (let j = 0; j < colunas2; j++) {
    // Alterna entre "⬜" e "⬛" com base na soma dos índices
    tabuleiro[i][j] = (i + j) % 2 === 0 ? "⬜" : "⬛";
  }
}
console.log(tabuleiro)
//Função de Alta Ordem que é utilizada para percorrer cada linha da matriz e e exibir os elementos de cada linha formatados como uma string no console.
//Usamos o método .join(" ") transforma o array da linha em uma string, separando os elementos com um espaço (" "), para que fique visualmente formatado como desejado
tabuleiro.forEach(linha => console.log(linha.join(" ")));


//Verifique quantos números em uma matriz são pares.
function ehpar(matriz)
{
let pares = 0;
for (let i = 0; i < matriz.length; i++){ //matriz.length é o mesmo que a variável linhas
  for (let j= 0; j < matriz[i].length; j++){ //O mesmo que a variável coluna
    if(matriz[i][j] % 2 === 0)
      pares++
  }
  }
  return (`Na matriz foi encontrado ${pares} números pares`)
}
console.log(ehpar(matriz))

//Substitua todos os valores maiores que 10 em uma matriz por `0`.
let matriz2 = []
let ten = 10;
for(let i = 0; i < linhas; i++){
  matriz2[i] = []
  for (let j = 0; j < colunas;j++){
    matriz2[i][j] = ten * (i+j)
  }
}
console.log(matriz2)
console.log("Após Substituir:")
for(let i = 0; i < linhas; i++){
  for (let j = 0; j < colunas;j++){
  matriz2[i][j] = matriz2[i][j] >= 10 ? "0 noob" : "1 pog"; 
  //Um operador ternário sozinho não tem efeitos colaterais como um if, ele apenas retorna, mas se quisermos atribuir precisamos incrementalo
  ////Equivalente a 
  // if (matriz2[i][j] >= 10){
  // matriz2[i][j] =  "0 noob" }

}

}
console.log(matriz2)
