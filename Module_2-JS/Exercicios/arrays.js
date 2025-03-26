
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