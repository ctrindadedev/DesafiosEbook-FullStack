// Declare uma função chamada calculaArea que aceite o comp e a larg de um retângulo e retorne a área. 📏
function area_retangulo(comprimento, largura) {
  const area = comprimento * largura;
  return area;
}
console.log(area_retangulo(10, 20));

// 2. Crie uma função chamada parOuImpar que aceite um número e exiba "Par" se o número for par e "Ímpar" se o número for ímpar. 🔢
function parOuImpar(numero) {
  let resultado;
  if (numero % 2 == 0) {
    resultado = "Par";
  } else {
    resultado = "Impar";
  }

  return resultado;
}
console.log(parOuImpar(2));
// 3. Crie uma função anônima que aceite dois números e retorne a soma deles.
const somador = function (n1, n2) {
  return n1 + n2;
};
console.log(somador(1, 2));

// 4. Escreva uma arrow function que aceite um nome e exiba uma mensagem de boas-vindas personalizada. 🚀
const welcome = (nome) => {
  return console.log(`Boas-Vindas ao meu estudo de JavaScript ${nome}`);
};
// 5. Crie uma função chamada converterCelsiusParaFahrenheit que aceite uma
// temperatura em Celsius e retorne a temperatura convertida para Fahrenheit
const converterCelsiusParaFahrenheit = (temp_Celsius) => {
  let Fahrenheit = 1.8 * temp_Celsius + 32;
  return Fahrenheit;
};
