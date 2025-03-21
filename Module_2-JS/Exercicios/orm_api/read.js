const Usuario = require("./Usuario");
const { Sequelize } = require("sequelize");

async function listarUsuarios() {
  try {
    return await Usuario.findAll();
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
  }
}

module.exports = { listarUsuarios };

//Com filtro
// const usuariosFiltrados = await Usuario.findAll({
//where: { idade: { [Sequelize.Op.gt]: 30 } }, });
