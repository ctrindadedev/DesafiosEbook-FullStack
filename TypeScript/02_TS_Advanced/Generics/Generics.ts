//variável de tipo" que pode ser usada com qualquer tipo de dado.
//Generics são particularmente úteis em funções que precisam trabalhar com diferentes tipos de dados sem perder a tipagem.

function identico<T>(valor: T): T {
  return valor;
}
console.log(identico<string>("Olá")); // Saída: "Olá"
console.log(identico<number>(10)); // Saída: 10

//T representa o tipo dos elementos do array. A função pegarPrimeiroElemento pode ser usada com qualquer tipo de array.
function pegarPrimeiroElemento<T>(arr: T[]): T {
  return arr[0];
}
const numeross = [1, 2, 3];
const palavras = ["a", "b", "c"];
console.log(pegarPrimeiroElemento(numeross)); // Saída: 1
console.log(pegarPrimeiroElemento(palavras)); // Saída: "a"

//Restições com Generics

//Restrição com Key
function obterPropriedade<T, K extends keyof T>(objeto: T, chave: K) {
  return objeto[chave];
}
const pessoaa = { nome: "Carlos", idade: 30 };
console.log(obterPropriedade(pessoaa, "nome")); // Saída: "Carlos"
//console.log(obterPropriedade(pessoa, "altura"));  Erro por essa key não ser válida

//Restrição com types
function exibirValor<T extends string | number>(valor: T): void {
  console.log(`O valor é: ${valor}`);
}
exibirValor("Olá"); // Saída: "O valor é: Olá"
exibirValor(123); // Saída: "O valor é: 123"
// exibirValor(true); // Erro: Tipo 'boolean' não é atribuível a string | number

//Generics + Interfaces
interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

// Usando a interface com diferentes tipos
const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "João", age: 25 },
  status: 200,
  success: true,
};

const productResponse: ApiResponse<string[]> = {
  data: ["Produto 1", "Produto 2"],
  status: 200,
  success: true,
};
