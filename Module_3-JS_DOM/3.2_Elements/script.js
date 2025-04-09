let titulo = document.getElementById("titulo");
console.log(titulo);
let paragrafos = document.getElementsByClassName("texto"); // HTMLCollection [ <p.texto>,<p.texto> ]
console.log(paragrafos);
let todosParagrafos = document.getElementsByTagName("p");

//Manipulando querySelector

// Seleciona o primeiro elemento que corresponde ao seletor CSS

let primeiroParagrafo = document.querySelector(".texto");
//adicione uma nova classe a ele.
primeiroParagrafo.classList.add("bigger");
// Seleciona todos os elementos que correspondem ao seletor CSS
let AllParagraphs = document.querySelectorAll(".texto");
console.log(todosParagrafos); // NodeList [ <p.texto>, <p.texto> ]

//QuerySelectorAll retorna Uma coleção de nós (elementos). ~ parecido com um array ~ NodeList
let divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.classList.add("bigger");
  //altere seu conteúdo
  div.innerHTML = "Hoje é um dia chuvoso, e eu estou com fome.";
});

//Combinar seletores CSS em querySelector para selecionar elementos de maneira mais precisa (por exemplo, selecione um elemento com uma classe específica dentro de um determinado ID).
let galeria = document.querySelector("#galeria.section");
galeria.classList.add("corzinha");
