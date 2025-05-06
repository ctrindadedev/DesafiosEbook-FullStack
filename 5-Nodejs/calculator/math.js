// Funções de adição e subtração
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

const multiplication = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return a / b;
};
// Exportando as funções
module.exports = {
  add,
  subtract,
  multiplication,
  division,
};
