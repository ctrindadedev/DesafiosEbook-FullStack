// declare um objeto chamado livro com as propriedades titulo , autor e ano .
let livro = {
  titulo: "Entendendo algoritmos - um guia ilustrado",
  autor: "Aditya",
  ano: 2015,
  // Adicione um método chamado descricao ao objeto livro que exiba umamensagem com o título e o autor do livro. 📖

  desc: function () {
    console.log(
      `O título do livro é ${livro.titulo} e o autor é ${livro.autor}`
    );
  },
};
livro.desc();

// Use um loop for...in para iterar sobre todas as propriedades do objeto livro e exibir suas chaves e valores no console. 🔄
for (let chave in livro) {
  console.log(`Chave: ${chave} 
    valor: ${livro[chave]}`);
}
