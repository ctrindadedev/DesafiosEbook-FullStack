// Crie um arquivo chamado meu_nome.js e declare uma variável chamada nome
// que armazene seu nome. Exiba o valor no console. 📝
const name = "Meu nome é Caio de Medeiros Trindade";
console.log("Meu nome é Caio de Medeiros Trindade");
// 2. Crie uma variável chamada idade com a sua idade e exiba o valor no
// console. Altere o valor da variável e exiba o novo valor. 🎂
let idade = 18;
console.log(idade);
idade = 19;
console.log(idade);
// 3. Declare uma constante chamada cidade com o nome da sua cidade e exiba o
// valor no console. 🌆
const cidade = "Natal - Rio Grande do Norte";
console.log(cidade);
// 4. Experimente declarar uma constante e tentar alterar seu valor. Observe o
// erro que ocorre. 🚫
// cidade = "recife";
// 5. Pratique criar variáveis com let e const em diferentes blocos de código
// (como dentro de funções ou loops) e observe como o escopo afeta seu uso.
// 🔄
for (let index = 9; index <= idade; index++) {
  console.log(
    `Eu me chamo Pedro de Medeiros Feitosa, nasci em 2015 e tenho ${index} anos, e estamos no ano de ${
      2015 + index + 1
    }`
  );
}
// for (const i = 9; i <= idade; i++) {
//   console.log(
//     `Eu me chamo Pedro de Medeiros Feitosa, nasci em 2015 e tenho ${i} anos, e estamos no ano de ${
//       2015 + i + 1
//     }`
//   );
// }
