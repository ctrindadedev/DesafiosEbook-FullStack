const paragrafo = document.getElementById("paragrafo");
const botaoEstilos = document.getElementById("botaoEstilos");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoRemover = document.getElementById("botaoRemover");

botaoEstilos.addEventListener("click", function () {
  paragrafo.style.color = "blue";
  paragrafo.style.fontSize = "20px";
  paragrafo.style.backgroundColor = "lightgray";
});
botaoAdicionar.addEventListener("click", function () {
  paragrafo.classList.add("destacado");
});
botaoRemover.addEventListener("click", function () {
  paragrafo.classList.remove("destacado");
});
let botaoToggle = document.getElementById("botaoToggle");
botaoToggle.addEventListener("click", function () {
  paragrafo.classList.toggle("destacado");
});
//Crie uma função que altera múltiplos estilos de um elemento ao clicar em um botão, usando uma string CSS.
botaoEstilos.addEventListener("click", function () {
  paragrafo.style.cssText =
    "color: green; font-size: 25px; background-color: lightyellow;";
});
