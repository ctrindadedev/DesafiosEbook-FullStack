const container = document.getElementById("container");
const paragrafoOriginal = document.getElementById("paragrafoOriginal");
const segundo = document.getElementById("segundo");
const containerChilds = container.children;
const botaoInserirAntes = document.getElementById("inserirAntes");
const botaoSubstituir = document.getElementById("substituir");
const botaoAdicionar = document.getElementById("adicionar");
const botaoRemover = document.getElementById("remover");

console.log(containerChilds);

//Implemente um botão que crie novos elementos ao ser clicado. 🆕

botaoAdicionar.addEventListener("click", function () {
  let novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "Novo parágrafo criado dinamicamente!";
  container.appendChild(novoParagrafo);
});
// Implemente um botão que remova o último elemento filho de um containerao ser clicado.
botaoRemover.addEventListener("click", function () {
  if (containerChilds) {
    for (let i = containerChilds.length - 1; i >= 0; i--) {
      container.removeChild(containerChilds[i]);
    }
  }
});
//Crie uma função que insere um novo elemento antes de um elemento específico ao clicar em um botão.
botaoInserirAntes.addEventListener("click", function () {
  let novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "Parágrafo inserido antes do segundo!";
  container.insertBefore(novoParagrafo, segundo);
});
//Implemente uma funcionalidade que substitua um elemento existente por um novo elemento ao clicar em um botão.
botaoSubstituir.addEventListener("click", function () {
  let novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "Parágrafo substituto!";
  container.replaceChild(novoParagrafo, paragrafoOriginal);
});
