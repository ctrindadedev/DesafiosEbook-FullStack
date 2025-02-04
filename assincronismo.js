//A programação assíncrona permite que o programa continue rodando enquanto espera a conclusão dessas tarefas, tornando o código mais eficiente e responsivo. 
// Entendendo usando callbacks, promises e async/await. 
//Até agora estavamos praticando a programação sincronica, que uma ação é executada após concluir outra
//Já na programação assíncrona, as operações podem ser iniciadas e concluídas em tempos diferentes, sem bloquear a execução do restante do código. (Por agua para ferver enquanto corta vegetais)
//Dicas Importantes
// Entenda o Event Loop: é o mecanismo que gerencia a execução assíncrona no JavaScript. Saiba como ele funciona para evitar confusões.
// Evite Misturar Callbacks com Promises:
// Escolha uma abordagem e mantenha a consistência no código.
// Use `try/catch` com Async/Await:
// Sempre trate erros para evitar falhas inesperadas.

//Um callback é uma função passada como argumento para outra função, que será chamada depois que uma tarefa for concluída.
//Quando muitas funções dependem umas das outras, os callbacks podem gerar algo chamado de "callback hell" (um código difícil de ler e manter).
function buscarDados(callback) {
  setTimeout(() => {
    console.log("Dados buscados!");
    callback();
  }, 2000);
}

buscarDados(() => {
  console.log("Callback executado!");
});
//Para resolver esse problema, existe os "Promises"
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados buscados!");
    }, 2000);
  });
}

buscarDados()
  .then(dados => {
    console.log(dados); // Saída: Dados buscados!
  })
  .catch(erro => {
    console.error("Erro ao buscar os dados:", erro);
  });

  //Async/Await para tornar o código mais legivel permitindo que você escreva como se fosse síncrono.
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