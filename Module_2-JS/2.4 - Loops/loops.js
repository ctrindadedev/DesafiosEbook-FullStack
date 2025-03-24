// 1. Crie um arquivo chamado minha_tabua.js e use um loop for para exibir a tabuada do número 7 (de 1 a 10). 🧮
for (let index = 0; index < 11; index++) {
  console.log(`7x${index}=${7 * index}`);
}
// 2. Use um loop while para exibir os números pares de 2 a 20 no console.
let index = 0;
while (index % 2 === 0 && index <= 18) {
  index += 2;
  console.log(index);
}
// 3. Crie um loop do...while que exiba os números pares de 2 a 20 no console. 🔢

index = 0;
do {
  index += 2;
  console.log(index);
} while (index % 2 === 0 && index < 20);

// 4. Declare um array de sex cores e use um loop for para exibir cada cor no console. 🌈
cores = ["red", "branco", "preto", "green", "blue", "amarilla"];
for (let index = 0; index < cores.length; index++) {
  const element = cores[index];
  console.log(element);
}

// 5. Use o método forEach para iterar sobre um array de nomes e exibir uma saudação personalizada para cada nome. 👋
nomes = ["caio", "pedro", "gutzz", "lipe", "mitsu"];
nomes.forEach((nome) => {
  console.log(`%cOlá, ${nome}! 👋`);
});
