"use strict";
// Enums são usados para definir um conjunto de valores nomeados. Isso ajuda a
// tornar o código mais legível e autodescritivo.
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
var Status;
(function (Status) {
    Status["Sucesso"] = "SUCESSO";
    Status["Falha"] = "FALHA";
    Status["Pendente"] = "PENDENTE";
})(Status || (Status = {}));
let meuStatus = Status.Sucesso;
