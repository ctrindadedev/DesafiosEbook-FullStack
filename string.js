//Strings são arrays de char.

//Desafios

//Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.
let nome_completo = "Caio de Medeiros Trindade";
first_name = nome_completo.split(" ");
console.log(first_name[0])
//Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.
let js = "                      Java Script                                     "
if (js.includes("Java"))
    console.log("Javinhaaa")

//Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.
console.log(js, "oi")
js_pog = js.toUpperCase().trim()
console.log(js_pog, "oi")


//Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.
let sistema = "Houve um erro no sistema";
let att = sistema.replace("erro", "correção")
console.log(sistema)
console.log(att)
//Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.
let jslover = "Eu amo Java Script O"
lover_Js = jslover.split(" ");
console.log(lover_Js)
//Valide se um URL começa com `https://` e termina com `.com`.
let url = "https://caiojs.com";
let cmc = url.startsWith("https://")
let end = url.endsWith(".com")
if ((cmc && end === true))
    console.log("URL válida")
else
    console.log("URL inválida")