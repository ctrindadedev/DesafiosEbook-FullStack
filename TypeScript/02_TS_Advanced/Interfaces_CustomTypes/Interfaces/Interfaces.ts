// # Interfaces e Custom Types em TypeScript
// - Interfaces são usadas para definir contratos de objetos e classes.
// - Custom Types permitem criar tipos personalizados e complexos.
// - Exemplos: tipos de objetos, tipos combinados e genéricos.
// - Interfaces e tipos customizados possam ser usados de maneira intercambiável em muitos casos
// - Interfaces podem ser implementadas por classes, enquanto tipos não.
// - Interfaces são preferíveis para definir estruturas de objetos, enquanto tipos são mais versáteis para combinações de tipos e literais.

interface Usuario {
  nome: string;
  idade: number;
  email?: string; // Propriedade opcional
}
const usuario1: Usuario = {
  nome: "Ana",
  idade: 28,
};
// Usuario é uma interface que define que todo objeto desse tipo deve ter nome e idade como obrigatórios e email como opcional.

//Implementando Interfaces em Classes:

class Pessoa implements Usuario {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  saudar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}
const pessoa1 = new Pessoa("Carlos", 35);
console.log(pessoa1.saudar()); // Saída: "Olá, meu nome é Carlos e tenho 35 anos."

//Extendendo Interfaces
interface Endereco {
  rua: string;
  cidade: string;
}
interface UsuarioComEndereco extends Usuario, Endereco {
  telefone: string;
}

const usuario2: UsuarioComEndereco = {
  nome: "Caio de Medeiros Trindade",
  telefone: "81991915155",
  email: "caiomedtrindade@gmail.com",
  idade: 19,
  rua: "Rua dos bobos numero 0",
  cidade: "Recife",
};
console.log(usuario2);
