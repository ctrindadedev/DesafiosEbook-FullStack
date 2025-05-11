//  "|"  é usado para indicar uma união de tipos => ter um dos tipos especificados, separados pela barra vertical.
// type ID = string | number;
// let usuarioId: ID;

// usuarioId = 123; // Válido
// usuarioId = "abc123"; // Válido

// Combinando Tipos ( Union Types ):
//Tipos customizados são úteis para definir tipos que podem ser uma combinação de outros

type StatusPedido = "pendente" | "enviado" | "entregue";
function atualizarStatus(status: StatusPedido): void {
  console.log(`Status atualizado para: ${status}`);
}
atualizarStatus("enviado"); // Válido
// atualizarStatus("cancelado"); Tipo '"cancelado"' não é atribuível ao tipo 'StatusPedido'.

//Tipos podem ser extendidos com outros tipos usando a interseção ( & ).
//Interseção ( & ):
type Admin = {
  nome: string;
  permissao: string;
};
type UsuarioPadrao = {
  nome: string;
  idade: number;
};

type UserAdmin = UsuarioPadrao & Admin;
const admin: UserAdmin = {
  nome: "Carlos",
  idade: 30,
  permissao: "superuser",
};
