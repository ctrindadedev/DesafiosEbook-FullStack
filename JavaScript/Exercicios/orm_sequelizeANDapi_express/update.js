const Usuario = require("./Usuario");

async function atualizarUsuario() {
  try {
    await Usuario.update({ idade: 35 }, { where: { nome: "João Silva" } });
    console.log("Usuário atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
  }
}

atualizarUsuario();
