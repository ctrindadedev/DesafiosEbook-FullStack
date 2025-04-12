// 1. Crie um arquivo chamado minhas_frutas.js e declare um array chamado frutas que armazene o nome de cinco frutas. Exiba o array no console. 🍎🍌🍇
let frutas = ["maçã", "banana", "uva", "goiaba", "melancia"];
console.log(frutas);
// 2. Acesse e exiba o primeiro e o último elemento do array frutas no console. 🥭
console.log(frutas[0], frutas[frutas.length - 1]);
// 3. Modifique o segundo elemento do array frutas e exiba o array atualizado no console. 🍓
frutas[1] = "laranja";
console.log(frutas);
// 4. Adicione uma nova fruta ao final do array frutas e exiba o array no console. 🍍
frutas.push("Abacaxi");
console.log(frutas);

// 5. Remova o primeiro elemento do array frutas e exiba o array no console. 🍊
frutas.shift();
console.log(frutas);
// 6. Itere sobre o array frutas e exiba cada fruta no console usando o método forEach . 🔄
for (let index = 0; index < frutas.length; index++) {
  const element = frutas[index];
  console.log(element);
}

//Desafios

//1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.
let cores = ["Azul", "Preto", "Branco"];
console.log(cores);
cores.push("Bege");
console.log(cores);

//2. Use um loop para exibir todos os itens de um array de compras.
let compras = ["Teclado", "Pulseira São bento", "Pod"];
for (let i = 0; i < compras.length; i++) console.log(compras[i]);
//3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.
let num = [10, 20, 30, 40, 50];
console.log(num.slice(3));

//4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.
let tarefas = [
  "Estudar JS",
  "Estudar ME",
  "Projeto ITP",
  "Prova PLE",
  "CULTURA e DOGSHIT",
];
tarefas.shift(); //Salva o que foi removido em outro array
console.log(tarefas);

//5. Use `splice` para substituir o terceiro item de um array por "Substituído".
tarefas.splice(2, 1, "substituido but");
console.log(tarefas);

//6. Transforme um array de palavras em uma frase completa usando `join`.
let frase = ["Caio", "de", "Medeiros", "Trindade"];
frase = frase.join(" ");
console.log(frase);
