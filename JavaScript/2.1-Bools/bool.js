//Desafios

//Verifique se um número é maior que 10 e menor que 20.
let numero = 21;
if (numero > 10 && numero < 20)
  console.log("O número é maior que 10 e menor que 20");
else console.log("O número está fora do padrão estabelecido");

//Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.
let idade = 17;
if (idade >= 16) console.log("Pode votar!");
//Implemente um sistema de notas, não pode ser usado o switch case pois  só compara diretamente com os valores dos case, mas não aceita expressões lógicas.
let nota = 88;
if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado com B");
} else {
  console.log("Reprovado");
}
// Sistema de saldo
let saldo = 0;
if (saldo > 0) {
  console.log("Saldo Positivo");
} else if (saldo < 0) {
  console.log("Saldo negativo. Seu pobre!");
} else {
  console.log("Sem Saldo. Seu pobre!");
}
//Use o operador `!` para verificar se uma luz está apagada e ligue-a.
luz_acesa = true;
if (luz_acesa === true) luz_acesa = !luz_acesa;
console.log("Agora a luz está apagada", luz_acesa);
