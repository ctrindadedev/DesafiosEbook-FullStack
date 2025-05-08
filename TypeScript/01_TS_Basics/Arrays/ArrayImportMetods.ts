const listaNumeros: number[] = [1, 2, 3, 10, 20, 30, 40, 60, 99, 200];

//Iterar sobre um array usando for , for...of , e forEach , e observe as diferenças.
for (const element of listaNumeros) {
  console.log(element);
}
listaNumeros.forEach((n) => {
  console.log(n);
});
for (let index = 0; index < listaNumeros.length; index++) {
  let element = listaNumeros[index];
  console.log(element);
}

//Array 2D que represente uma matriz de 3x3
const matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let index = 0; index < matriz.length; index++) {
  for (let i = 0; i < matriz[index].length; i++) {
    let element = matriz[index][i];
    console.log(element);
  }
  let element = matriz[index];
}
//Utilize Métodos de Manipulação de Arrays: Use métodos como map , filter , e reduce para transformar um array de números.
let numerosDobrados: number[] = numeros.map((numero) => numero * 2);

//Dobre todos os valores de um array e depois filtre apenas os números maiores que 100.
const numerosDobradosMaioresCem: number[] = numerosDobrados.filter(
  (numerosDobrados) => numerosDobrados > 100
);

//Crie dois arrays de strings e combine-os usando concat . Em, seguida, extraia uma subseção do array combinado usando slice .
const nomes1: string[] = ["Caio", "Trindade"];
const nomes2: string[] = ["Sabrina", "Alves"];
const nomes3: string[] = nomes1.concat(nomes2);
const nomes4: string[] = nomes3.slice(0, 2);
console.log(nomes3);
console.log(nomes4);
