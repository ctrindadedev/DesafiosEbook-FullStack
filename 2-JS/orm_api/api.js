const express = require("express");
const { sincronizarBanco } = require("./sync");
const { criarUsuarios } = require("./create");
const { listarUsuarios } = require("./read");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json({
    mensagem: "Olá Caio",
  });
});

//As requisições de uma API rest, são do tipo JSON
app.post("/usuarios", (request, response) => {
  criarUsuarios(request.body.nome, request.body.email, request.body.idade)
    .then(() => {
      response.status(200).json({
        mensagem: "Usuário criado com sucesso!",
      });
    })
    .catch((error) => {
      response.status(500).json({
        erro: error.message,
      });
    });
});

app.get("/usuarios", async (request, response) => {
  const usuarios = await listarUsuarios();
  response.status(200).json({
    usuarios,
  });
});

sincronizarBanco().then(() => {
  app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
  });
});
