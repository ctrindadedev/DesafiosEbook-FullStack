let titulo = document.getElementById("titulo");
titulo.textContent = "Olá, Mundo!";

let descricao = document.getElementById("descricao");
descricao.innerHTML = "Este é um <strong>parágrafo</strong> modificado."; //Diferente do .textcontent, innerhtml também permite alterar propriedades do html
let paragrafo = document.getElementById("paragrafo");
paragrafo.style.color = "blue";
paragrafo.style.fontSize = "20px";
paragrafo.style.backgroundColor = "yellow";

let paragrafo2 = document.getElementById("paragrafo2");
paragrafo2.classList.add("destacado"); // Adiciona a classe 'destacado'
console.log(paragrafo.className); // "destacado"
paragrafo2.classList.remove("destacado"); // Remove a classe 'destacado'
console.log(paragrafo.className);
paragrafo2.classList.toggle("destacado"); // Toggle funciona da seguinte forma: Se o elemento tiver a propriedade, ela será removida, senão esrá adicionada
console.log(paragrafo.className);

// Função que adiciona uma classe a um elemento ao clicar em um botão e remova a classe ao clicar novamente (usando classList.toggle )
const imagem = document.querySelector(".imagem_principal");
const imageHighlightButton = document.querySelector(".image_highlight ");
const classChanger = (element) => {
  element.classList.toggle("imagem-principal-destacada");
};
//O botão agora é interativo
imageHighlightButton.addEventListener("click", function () {
  classChanger(imagem);
});

//Função que muda/retorna diretamente o conteudo da imagem no HTML com setAtribute
const imagemtrocavel = document.getElementById("imagem1");
const imageChangerButton = document.querySelector(".image_changer");
const imageChanger = (element) => {
  if (element.getAttribute("src") === "assets/imagem1.jpg") {
    element.setAttribute("src", "assets/imagem2.png");
    element.setAttribute("alt", "Imagem de uma sakura em preto e branco");
  } else {
    element.setAttribute("src", "assets/imagem1.jpg");
    element.setAttribute("alt", "Imagem de dois irmãos");
  }
};
imageChangerButton.addEventListener("click", function () {
  imageChanger(imagemtrocavel);
});

//Combinar várias manipulações (conteúdo, atributos, estilos) em uma função  que altera completamente a aparência e o conteúdo de um elemento ao clicar em um botão.
const body = document.querySelector("body");
const pageChangerButton = document.querySelector(".page_changer");
const pageParagraphs = document.querySelectorAll("p");

const darkMode = (element) => {
  element.classList.toggle("dark-mode");
};

const mudarConteudo = () => {
  //Para cada child node, remover esse nó.
  pageParagraphs.forEach((p) => p.remove());
  const novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "O botão mágico desligou as luzes da página!";

  //Trabalhar com JS no dom é essencial lembrar que o html funciona como uma estrutura de arvore, com nós, filhos (tag dentro de outra) e outros conceitos..
  //Parent.insertBefore(novoElemento, referencia)	Insere um novo nó antes de outro já existente, nesse caso, logo após o H1
  body.insertBefore(novoParagrafo, body.children[1]); // insere logo após o <h1>
};
pageChangerButton.addEventListener("click", function () {
  darkMode(body);
  mudarConteudo(body);
});

//Função para alterar parte do conteúdo e acionar o dark mode da página
