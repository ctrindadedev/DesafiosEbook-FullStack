//Async/Await para tornar o código mais legivel permitindo que você escreva como se fosse síncrono.
//Função Async retorna sempre promises
//Já o await, tira a necessidade de utilizar o catch, já que essa função atribui a uma variavel automaticamente o resultado esperado (Dentro da função)
//Gravar/Buscar dados num banco de dados, tudo isso é feito com funções await
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados buscados!");
    }, 2000);
  });
}

async function executar() {
  try {
    const dados = await buscarDados();
    console.log(dados); // Saída: Dados buscados!
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

executar();