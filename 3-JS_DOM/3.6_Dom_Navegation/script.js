const container = document.getElementById("container");
const botaoAdicionar = document.getElementById("adicionar");
const botaoRemover = document.getElementById("remover");
const filho = document.getElementById("paragrafo");

//Acessa o elemento pai da variavel filho com parentNode

const pai = filho.parentNode;

//Acessando nós filhos de um nó pai
const filhos = pai.children;

//Retorna uma node list com os nós filhos e os nós de texto (nesse caso) dos filhos
const filhosText = pai.childNodes;

//Acessando elementos irmãos de forma adjacente, ou seja, que estão em sequencia
const irmao1 = document.getElementById("primeiro");
const irmao2 = irmao1.nextElementSibling;
const irmao3 = irmao2.nextElementSibling;

//Criando elementos e atribuindo-os a nós já existentes

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

// Acessar o elemento pai de um parágrafo, alterando seu estilo.
pai.hasChildNodes;
// 2. Acesse todos os elementos filhos de um div e altere seu conteúdo de texto.
const alterarDiv = () => {};
// 3. Implemente a navegação entre elementos irmãos, alterando o estilo do
// próximo e do anterior ao clicar em um botão. 🔄
// 4. Crie uma função que adicione novos elementos ao DOM e outra que remova
// elementos existentes ao clicar em botões. 🛠️5. Combine várias manipulações (acesso a pai, filhos, irmãos) em uma função
// que altera a estrutura do DOM dinamicamente. 🌐
//Mostrando no console
console.log(pai);
console.log(filhos); // HTMLCollection [ <p>, <p>, <p> ]
console.log(filhosText);
