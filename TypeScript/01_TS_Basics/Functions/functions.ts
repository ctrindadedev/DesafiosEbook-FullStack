//Definindo funções que recebam parâmetros de diferentes tipos e retornem valores tipados (C valores padrão parâmetros opcionais)
function ehPar(a: number): string {
  if (a / 2) {
    return `O número ${a} é par!`;
  } else {
    return `O número ${a} não é par`;
  }
}
function vezes2(a: number, b: number = 2): number {
  return a * b;
}

// Reescrevendo as funções  como arrow functions/anônimas

const arrowVezes2 = (a: number, b: number = 2): number => a * b;

// Criando variáveis que armazenam funções com tipos definidos e troque as implementações das funções sem alterar os tipos.
let calculadora = (a: number, b: number, c: number): number => a * b * c;
console.log(calculadora(1, 2, 3));
calculadora = (a: number, b: number, c: number): number => a + b + c;
console.log(calculadora(1, 2, 3));
calculadora = (a: number, b: number, c: number): number => a - b - c;
console.log(calculadora(1, 2, 3));

// Implementandando uma função com múltiplas assinaturas que possa ser chamada com diferentes tipos de argumentos e produza resultados variados.
// Detalhe: A sobrecarga é "sintática". Então é declarado múltiplas assinaturas, mas a implementação da função é única.

// Declarações de Sobrecarga (apenas assinaturas)
function juntar(a: string, b: string): string;
function juntar(a: number, b: number): number;
function juntar(a: boolean, b: boolean): boolean;

// Implementação única (tem que lidar com todos os casos)
function juntar(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return `A primeira palavra é essa "${a}" a segunda palavra é essa "${b}"`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "boolean" && typeof b === "boolean") {
    return a === b;
  } else {
    throw new Error("Tipos incompatíveis");
  }
}
console.log(juntar("Olá", "Mundo"));
console.log(juntar(10, 20));
console.log(juntar(true, false));

// Exemplos de funções que retornam void, never e unknown

//Usado para funções que não retornam um valor
function logMesage(mensagem: string): void {
  console.log(mensagem);
}

// never : Usado para funções que nunca retornam, como funções que lançam exceções ou entram em loops infinitos.
function erroFatal(mensagem: string): never {
  throw new Error(mensagem);
}
erroFatal("Um erro ");
//(Verificando a diferença entre unknow e any - Um tipo precisa de verificação, outro não.):

function retornarAnyValor(valor: any): any {
  if (typeof valor === "string") {
    return "O valor é uma string";
  } else {
    return `O valor não é uma string, é um ${typeof valor}`;
  }
}

// unknown : Usado para funções que podem retornar qualquer tipo, mas requer verificação de tipo antes de uso.
function retornarValor(valor: unknown): string {
  if (typeof valor === "string") {
    return valor;
  } else {
    return "Valor não é uma string";
  }
}
//Any não precisar de verificação pode causar erros que só serão mostrados em tempo de execução, como:
let x: any = 10;
x.toUpperCase(); // Não dá erro em tempo de compilação, mas daria em execução
let y: unknown = 10;
y.toUpperCase(); // o tipo 'unknown' não tem o método 'toUpperCase'

console.log(retornarAnyValor(1));
console.log(retornarValor(1));
