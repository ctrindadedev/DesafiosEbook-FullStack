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
console.log(objeto)

const json = JSON.stringify(objeto); //para converter um objeto JavaScript em uma string JSON.
console.log(json);

let objeto2 = JSON.parse(json) //Converter uma string JSON em um objeto JS
console.log(objeto2)
console.log(objeto2.nome)

const dados = `{
  "nome": "Maria",
  "idade": 30,
  "habilidades": ["HTML", "CSS", "JavaScript"]
}`;
console.log(dados)
const usuario = JSON.parse(dados);
console.log(`Nome: ${usuario.nome}`); // Saída: Nome: Maria
console.log(`Habilidades: ${usuario.habilidades.join(", ")}`); // Saída: Habilidades: HTML, CSS, JavaScript
//Desafios 
// 1. Crie um objeto complexo em JavaScript, transforme-o em JSON e, em seguida, converta de volta para um objeto
class Molde{
  constructor(sexo, nome,  idade){
    this.sexo = sexo 
    this.idade = idade
    this.nome = nome
  }
}
const pessoa = new Molde("Feminino", "Ana", "20")
console.log(pessoa.nome)
const pessoa_json = JSON.stringify(pessoa);
console.log(pessoa_json)
const back = JSON.parse(pessoa_json)
console.log(back)
// 2. Crie um JSON representando uma lista de tarefas com campos como `nome`, `prioridade` e `completo`.
const lista = `{
"nome": "Cinema com Paz",
"Prioridade": "Alta",
"Completo": "false"
}`;
console.log(lista)

// 3. Simule uma API que retorna um JSON de informações de produtos e leia esses dados + Use `JSON.parse()` para converter uma string JSON em um objeto e acessar suas propriedades.
const produtos = `{ "nomes": ["queijo", "ovo", "cuscuz"], "preços": [15, 20, 4], "proteinas":[1, 2, 3] }`
const produtos_obj = JSON.parse(produtos)
console.log(produtos_obj.nomes[0])
console.log(produtos)


