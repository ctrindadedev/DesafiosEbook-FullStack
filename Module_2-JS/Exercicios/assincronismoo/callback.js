//Assincronismo é a base para execução em paralelo
function buscarDados(callback) {
  setTimeout(() => {
    console.log("Dados buscados!");
    callback("Por esse callback"); //Callback é a função que executa após acabar a operação assincrona 
  }, 2000); //Quando passam 2 segundos, essa função é executada.
}

buscarDados((mensagem) => {
  console.log(mensagem);
})

