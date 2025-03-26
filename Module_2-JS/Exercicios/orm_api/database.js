const { Sequelize } = require("sequelize"); //Importando o sequelize

// Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize("crud", "postgres", "c051005M.", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
