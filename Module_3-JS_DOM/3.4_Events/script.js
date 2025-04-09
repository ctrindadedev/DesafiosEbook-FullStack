const botao = document.getElementById("botaoClique");
const texto = document.getElementById("texto");
const campoTexto = document.getElementById("campoTexto");
const img = document.getElementById("img");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoRemover = document.getElementById("botaoRemover");
const meuBotao = document.getElementById("meuBotao");
const paragraphButton = document.getElementById("meuBotao2");
// Evento de clique
botao.addEventListener("click", function () {
  alert("Botão clicado!");
});
// Evento de mouseover
texto.addEventListener("mouseover", function () {
  texto.style.color = "blue";
});
// Evento de mouseout
texto.addEventListener("mouseout", function () {
  texto.style.color = "black";
});
// Evento de keydown
campoTexto.addEventListener("keydown", function (event) {
  console.log("Tecla pressionada: " + event.key);
});
// Evento de keyup
campoTexto.addEventListener("keyup", function (event) {
  console.log("Tecla liberada: " + event.key);
});

function mostrarAlerta() {
  alert("Formulário Enviado!");
}

// Adiciona o listener
botaoAdicionar.addEventListener("click", function () {
  meuBotao.addEventListener("click", mostrarAlerta);
});
// Remove o listener
botaoRemover.addEventListener("click", function () {
  meuBotao.removeEventListener("click", mostrarAlerta);
});

//Adicione um Event Listener a um botão que altera o texto de um parágrafo ao ser clicado.
const allParagraphs = Array.from(document.getElementsByTagName("p")); //HTMLCollection sendo transformada num Array.
console.log(allParagraphs);
const paragraphChanger = () => {
  allParagraphs.forEach((p) => {
    p.textContent = "Novo parágrafo.";
  });
};
paragraphButton.addEventListener("click", () => paragraphChanger());
// 2. Adicione Event Listeners para mouseover e mouseout em uma imagem,  alterando seu estilo ao passar o mouse sobre ela e ao sair.
// usar toggle incorretamente para mouseover/mouseout, faz com que a classe seja adicionada e removida a cada movimento mínimo do mouse — e isso gera “flickering” (efeito piscante).
// Maneira correta de usar o toggle para esses casos depende da transição no css! E de operadores booleanos para o toogle apresentar o comportamento esperado.
const imageChanger = (element, destaque) => {
  element.classList.toggle("estilo-destacado", destaque);
};

img.addEventListener("mouseover", () => imageChanger(img, true));
img.addEventListener("mouseout", () => imageChanger(img, false));

// Crie um campo de texto que exiba a contagem de caracteres digitados em tempo real
const contador = document.getElementById("contador");
const caracterCounter = (element) => {
  element.addEventListener(
    "input",
    // .value acessa valores de tags html como <input> ou <textarea> (retorna o que foi digitado pelo usuário)
    () => (contador.textContent = `Caracteres: ${element.value.length}`)
  );
};
caracterCounter(campoTexto);

// Combine vários eventos para criar uma interatividade mais complexa, como  um formulário que exibe uma mensagem de sucesso ao ser enviado, com validação dos campos .
const formulario = document.querySelector("form");
//A função que é passada como parametro do eventlistener, é uma função callback estando "prontidão"
// Já o parametro event é o objeto que será gerado pelo navegado apóscaptar o event.type definido previamente, essa é a lógica por trás de acessar funções relacionadas ao parametro event
formulario.addEventListener("submit", (event) => {
  //PreventDefault evita o direcionamento automático após o envio do formulário (/submit)
  event.preventDefault();
  mostrarAlerta();
  console.log("Enviado com Sucesso!");
});
