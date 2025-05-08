let frutas: string[] = ["maçã", "banana", "laranja"];
let numeros: Array<number> = [1, 2, 3, 4, 5];
let numbers1: number[] = [0, 5, 20];
let primeiraFruta: string = frutas[10];
frutas.push("uva");
let ultimaFruta: string | undefined = frutas.pop();
console.log(ultimaFruta); //"uva"
frutas.unshift("morango"); // Adiciona "morango" ao início
let primeiraRemovida: string | undefined = frutas.shift(); //Remove o primeiro elemento
