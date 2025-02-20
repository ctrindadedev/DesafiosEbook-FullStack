
// | `push()` | Adiciona um elemento ao final | `frutas.push("Uva")` | `["Maçã", "Banana", "Uva"]` |
//| `pop()` | Remove o último elemento | `frutas.pop()` | `["Maçã", "Banana"]` |
//| `shift()` | Remove o primeiro elemento | `frutas.shift()` | `["Banana", "Laranja"]` |
//| `unshift()` | Adiciona um elemento no início | `frutas.unshift("Morango")` | `["Morango", "Maçã"]` |
//| `length` | Retorna o tamanho do array | `frutas.length` | `3` |
    //Acessar o último item de um array
    let numeros = [5, 10, 15];
    console.log(numeros[numeros.length - 1]);  // Saída: 15
//| `indexOf()` | Retorna o índice de um valor | `frutas.indexOf("Banana")` | `1` |
//| `slice()` | Retorna parte do array | `frutas.slice(1, 3)` | `["Banana", "Laranja"]` |
//| `splice()` | Adiciona/Remove elementos | `frutas.splice(1, 1, "Uva")` | `["Maçã", "Uva", "Laranja"]` |
    let lista = ["A", "B", "C"];
    lista.splice(1, 1 , "X", "Y");
    console.log(lista);  //De onde começa, quantos serão deletados, quem vai substituir.
//| `join()` | Junta os elementos em uma string | `frutas.join(", ")` | `"Maçã, Banana, Laranja"` |

//Desafios

//1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.
let cores = ["Azul", "Preto", "Branco"]
console.log(cores)
cores.push("Bege")
console.log(cores)

//2. Use um loop para exibir todos os itens de um array de compras.
let compras = ["Teclado", "Pulseira São bento", "Pod"]
for (let i = 0; i < compras.length ; i++)
    console.log(compras[i])
//3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.
let num = [10, 20, 30, 40, 50]
console.log(num.slice(3))

//4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.
let tarefas = ["Estudar JS", "Estudar ME", "Projeto ITP", "Prova PLE", "CULTURA e DOGSHIT"]
tarefas.shift() //Salva o que foi removido em outro array
console.log(tarefas)

//5. Use `splice` para substituir o terceiro item de um array por "Substituído".
tarefas.splice(2, 1, "substituido but")
console.log(tarefas)

//6. Transforme um array de palavras em uma frase completa usando `join`.
let frase = ["Caio", "de", "Medeiros", "Trindade"]
frase = frase.join(" ")
console.log(frase)