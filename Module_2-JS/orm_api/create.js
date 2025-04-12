const Usuario = require("./Usuario");
async function criarUsuarios(nome, email, idade) {
  try {
    await Usuario.create({ nome, email, idade });
    console.log("Usuário criados com sucesso!");
  } catch (error) {
    console.error("Erro ao criar usuários:", error);
  }
}
module.exports = { criarUsuarios };
