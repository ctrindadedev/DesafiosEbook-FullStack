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