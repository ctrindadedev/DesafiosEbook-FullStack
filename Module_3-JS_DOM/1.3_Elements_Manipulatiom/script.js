let titulo = document.getElementById("titulo");
titulo.textContent = "Olá, Mundo!";

let descricao = document.getElementById("descricao");
descricao.innerHTML = "Este é um <strong>parágrafo</strong> modificado."; //Diferente do .textcontent, innerhtml também permite alterar propriedades do html

let imagem = document.getElementById("imagem");
imagem.setAttribute("src", "assets/imagem2.png");
imagem.setAttribute("alt", "Imagem 2");

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

const classChanger = (element) => {
  element.classList.toggle("destacado");
  return console.log("Classe alterada com sucesso!");
};

let mudar_imagem = document.querySelector(".image_changer");
classChanger(mudar_imagem);
let mudar_pag = document.querySelector(".page_changer");

// <!-- 4. Crie uma função que adicione uma classe a um elemento ao clicar em um botão e remova a classe ao clicar novamente (usando classList.toggle ). 🔄 -->
// <!-- 5. Combine várias manipulações (conteúdo, atributos, estilos) em uma função  que altera completamente a aparência e o conteúdo de um elemento ao clicar em um botão. 🖋 -->
