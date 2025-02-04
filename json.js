//JSON (JavaScript Object Notation)** é um formato de dados baseado em texto que segue a sintaxe de objetos JavaScript. 
//Ideal para troca de dados entre sistemas diferentes. Pelos seguintes motibvos:
// Baseado em texto, logo é facilmente entendivel por humanos e máquinas
// Estruturado: Usa pares de chave-valor e arrays.
// Embora tenha raízes no JavaScript, pode ser usado em qualquer linguagem.

//Dicas Importantes
    //Use ferramentas online para validar seu JSON e evitar erros.
    // Atenção ao JSON.parse(): Certifique-se de que a string JSON é válida antes de convertê-la para um objeto.
    // JSON é ideal para armazenar configurações, dados de APIs e estruturações simples de dados. (Configurações)

//Manipulando/Transformando dados no JS:
const objeto = {
  nome: "João",
  idade: 25
};

const json = JSON.stringify(objeto); //para converter um objeto JavaScript em uma string JSON.
console.log(json);

let objeto2 = JSON.parse(json) //Converter uma string JSON em um objeto JS
console.log(objeto2.nome)

const dados = `{
  "nome": "Maria",
  "idade": 30,
  "habilidades": ["HTML", "CSS", "JavaScript"]
}`;

const usuario = JSON.parse(dados);
console.log(`Nome: ${usuario.nome}`); // Saída: Nome: Maria
console.log(`Habilidades: ${usuario.habilidades.join(", ")}`); // Saída: Habilidades: HTML, CSS, JavaScript