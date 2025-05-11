// Exemplos práticos onde tanto interfaces quanto tipos customizados podem ser usados:

// Interface para um objeto de Produto
interface ProdutoPS {
  id_produto: number;
  nome_produto: string;
  categoria: string;
  valor: number;
}

// Tipo customizado para IDs que possam ser string ou number
type ID = string | number;

//Uma interface para Cliente
interface Cliente {
  nome: string;
  id_cliente: ID;
  endereco: string;
  cadastrado: boolean;
}

// Union Types: Tipo que possa representar um Status de como "pendente", "enviado", "entregue" ou "preparando"
type PedidoStatus =
  | "enviado"
  | "aguardando pagamento"
  | "entregue"
  | "preparando";

// Extendendo Cliente e Produto para adicionar propriedades específicas de um cliente que fez o pedido de um produto

interface Pedido extends ProdutoPS, Cliente {
  id_pedido: number;
  quantidade: number;
  metodo_pagamento: string;
  pago: boolean;
  status: PedidoStatus;
}

//Declarando cliente e produto
const ceramica: ProdutoPS = {
  id_produto: 1,
  nome_produto: "cerâmica personalizavel",
  categoria: "orgulho",
  valor: 10,
};

const clientecaio: Cliente = {
  nome: "Caio de Medeiros Trindade",
  id_cliente: "1a",
  endereco: "Rua dos bobos número 0",
  cadastrado: true,
};

const pedidocaio: Pedido = {
  nome: clientecaio.nome,
  id_cliente: clientecaio.id_cliente,
  endereco: clientecaio.endereco,
  cadastrado: clientecaio.cadastrado,
  id_produto: ceramica.id_produto,
  nome_produto: ceramica.nome_produto,
  categoria: ceramica.categoria,
  valor: ceramica.valor,
  id_pedido: 1,
  quantidade: 4,
  metodo_pagamento: "Pix",
  pago: true,
  status: "enviado",
};

//Bônus: Classe que implemente essa interface.

class PedidoInfo implements Pedido {
  nome: string;
  id_cliente: ID;
  endereco: string;
  cadastrado: boolean;
  id_produto: number;
  nome_produto: string;
  categoria: string;
  valor: number;
  id_pedido: number;
  quantidade: number;
  metodo_pagamento: string;
  pago: boolean;
  status: PedidoStatus;
  // constructor(
  //   nome: string,
  //   id_cliente: ID,
  //   endereco: string,
  //   cadastrado: boolean,
  //   id_produto: number,
  //   nome_produto: string,
  //   categoria: string,
  //   valor: number,
  //   id_pedido: number,
  //   quantidade: number,
  //   metodo_pagamento: string,
  //   pago: boolean,
  //   status: PedidoStatus
  // ) {
  //   this.nome = nome;
  //   this.id_cliente = id_cliente;
  //   this.endereco = endereco;
  //   this.cadastrado = cadastrado;
  //   this.id_produto = id_produto;
  //   this.nome_produto = nome_produto;
  //   this.categoria = categoria;
  //   this.valor = valor;
  //   this.id_pedido = id_pedido;
  //   this.quantidade = quantidade;
  //   this.metodo_pagamento = metodo_pagamento;
  //   this.pago = pago;
  //   this.status = status;
  // }
  constructor(pedido: Pedido) {
    Object.assign(this, pedido);
  }
  getStatus() {
    return this.status;
  }
  atualizarStatus(novoStatus: PedidoStatus): void {
    this.status = novoStatus;
  }

  verificarPagamento(): boolean {
    return this.pago;
  }
}
