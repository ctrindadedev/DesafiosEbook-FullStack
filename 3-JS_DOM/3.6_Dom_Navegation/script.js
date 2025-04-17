const container = document.getElementById("container-paragrafos");
const botaoAdicionar = document.getElementById("adicionar");
const botaoRemover = document.getElementById("remover");
const styleButtonParent = document.getElementById("estilizar-pai");
const styleButtonBrothers = document.getElementById("estilizar-irmaos");
const pai = document.getElementById("pai");

//Outra forma de acessar o nó pai do nó filho
// const pai = filho.parentNode;

//Acessando nós filhos de um nó pai
const filhos = pai.children;
//Retorna uma node list com os nós filhos e os nós de texto (nesse caso) dos filhos
const filhosText = pai.childNodes;

//Acessar todos os elementos filhos de um div e alterar seu estilo e contéudo de texto
const alterarFamilia = (element) => {
  element.classList.add("not-clean");
  //Para alterar apenas os filhos (.children retorna uma HTML collection), então podemos fazer o seguinte:
  for (let childNode of element.children) {
    childNode.textContent = "Filho misterioso";
  }
};
styleButtonParent.addEventListener("click", () => {
  alterarFamilia(pai);
});

// Implemente a navegação entre elementos irmãos, alterando o estilo do próximo e do anterior ao clicar em um botão.

//Acessando elementos irmãos de forma adjacente, ou seja, que estão em sequencia
const irmao1 = document.getElementById("primeiro");
const irmao2 = irmao1.nextElementSibling;
const irmao3 = irmao2.nextElementSibling;
styleButtonBrothers.addEventListener("click", () => {
  const anterior = irmao1.previousElementSibling;
  const proximo = irmao1.nextElementSibling;
  if (anterior) {
    anterior.style.backgroundColor = "lightblue";
  }
  if (proximo) {
    proximo.style.backgroundColor = "lightgreen";
  }
});

//Função que adicione novos elementos ao DOM e outra que remova elementos existentes ao clicar em botões.

botaoAdicionar.addEventListener("click", function () {
  let novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "Novo parágrafo";
  container.appendChild(novoParagrafo);
});
botaoRemover.addEventListener("click", function () {
  let ultimoParagrafo = container.lastElementChild;
  if (ultimoParagrafo) {
    container.removeChild(ultimoParagrafo);
  }
});

//Inputs de Teste

console.log(pai);
console.log(filhos); // HTMLCollection [ <p>, <p>, <p> ]
console.log(filhosText);
console.log(container.children);
