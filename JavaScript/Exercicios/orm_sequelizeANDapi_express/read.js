const Usuario = require("./Usuario");

async function listarUsuarios() {
  try {
    const usuarios = await Usuario.findAll();
    console.log(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
  }
}

listarUsuarios();

//Com filtro
// const usuariosFiltrados = await Usuario.findAll({
//where: { idade: { [Sequelize.Op.gt]: 30 } }, });
