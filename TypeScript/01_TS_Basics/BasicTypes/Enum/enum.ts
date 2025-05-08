// Enums são usados para definir um conjunto de valores nomeados. Isso ajuda a
// tornar o código mais legível e autodescritivo.
enum Cor {
  Vermelho,
  Verde,
  Azul,
}
let minhaCor = Cor.Verde;

enum Status {
  Sucesso = "SUCESSO",
  Falha = "FALHA",
  Pendente = "PENDENTE",
}
let meuStatus: Status = Status.Sucesso;
