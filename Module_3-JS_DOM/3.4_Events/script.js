let botao = document.getElementById("botaoClique");
let texto = document.getElementById("texto");
let campoTexto = document.getElementById("campoTexto");
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

let botaoAdicionar = document.getElementById("botaoAdicionar");
let botaoRemover = document.getElementById("botaoRemover");
let meuBotao = document.getElementById("meuBotao");
function mostrarAlerta() {
  alert("Botão clicado!");
}

// Adiciona o listener
botaoAdicionar.addEventListener("click", function () {
  meuBotao.addEventListener("click", mostrarAlerta);
});
// Remove o listener
botaoRemover.addEventListener("click", function () {
  meuBotao.removeEventListener("click", mostrarAlerta);
});

// Crie um arquivo chamado eventos_interatividade.html e adicione um Event
// Listener a um botão que altera o texto de um parágrafo ao ser clicado. 📄
// 2. Adicione Event Listeners para mouseover e mouseout em uma imagem,
// alterando seu estilo ao passar o mouse sobre ela e ao sair. 🖼️3. Crie um campo de texto que exiba a contagem de caracteres digitados em
// tempo real usando os eventos keydown e keyup . 🔢
// 4. Implemente um botão que adiciona e remove uma classe de um parágrafo,
// alternando seu estilo ao ser clicado. 🔄
// 5. Combine vários eventos para criar uma interatividade mais complexa, como
// um formulário que exibe uma mensagem de sucesso ao ser enviado, com
// validação dos campos. 🖋
