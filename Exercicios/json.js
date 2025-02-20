
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


