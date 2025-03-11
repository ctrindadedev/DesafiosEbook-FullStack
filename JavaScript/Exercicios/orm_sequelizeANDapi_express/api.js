const express = require("express");
const { sincronizarBanco } = require("./sync");
const { criarUsuarios } = require("./create");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json({
    mensagem: "Olá mundo",
  });
});

app.post("/usuarios", (request, response) => {
  criarUsuarios(request.body.nome, request.body.email, request.body.idade)
    .then(() => {
      response.status(201).json({
        mensagem: "Usuário criado com sucesso!",
      });
    })
    .catch((error) => {
      response.status(500).json({
        erro: error.message,
      });
    });
});

sincronizarBanco().then(() => {
  app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
  });
});
