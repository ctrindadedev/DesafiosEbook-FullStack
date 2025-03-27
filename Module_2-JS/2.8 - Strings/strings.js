// 1. declare uma string quem contenha uma mensagem de boas-vindas personalizada. Use métodos de strings
let texto = "JavaScript é incrível!";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.indexOf("incrível"));
console.log(texto.slice(0, 10));
console.log(texto.replace("incrível", "fantástico"));
console.log(texto.split(" "));

// 2. Declare uma string que represente uma frase e use o método split para  dividi-la em palavras. Exiba o array de palavras no console.
const frase = "Eu gosto de JavaScripto";
console.log(frase.split(" "));
// 3. Crie uma string que contenha uma citação famosa e use o método replace para substituir uma palavra por outra.
let citacao = "O lobo é o lobo do homem";
citacao = citacao.replaceAll("lobo", "cachorro");
console.log(citacao);
// 4. Declare duas strings que representem nomes de pessoas e use operadores de comparação para verificar se os nomes são iguais.
const nome1 = "caio";
const nome2 = "caIo";
console.log(nome1 === nome2);
// 5. Crie uma string que contenha um parágrafo de texto e use o método slice para extrair uma frase específica.
const paragrafo =
  "O escritor e educador Rubem Alves (80 anos), esteve internado desde 10 de julho em uma Unidade de Terapia Intensiva (UTI). Nessa manhã, faleceu no Hospital Centro Médico de Campinas-SP, com falência múltipla de órgãos.";
console.log(paragrafo.slice(0, 43));
