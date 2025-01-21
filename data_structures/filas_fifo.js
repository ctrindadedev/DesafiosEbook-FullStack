class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(elemento) {
    this.itens.push(elemento); // Adiciona ao final
  }

  dequeue() {
    if (this.isEmpty()) {
      return "A fila está vazia!";
    }
    return this.itens.shift(); // Remove do início
  }

  front() {
    return this.isEmpty() ? "A fila está vazia!" : this.itens[0];
  }

  isEmpty() {
    return this.itens.length === 0;
  }
}

const fila = new Fila();
fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
console.log(fila.front());  // Saída: Cliente 1
fila.dequeue();
console.log(fila.front());  // Saída: Cliente 2

class Atendimento {
  constructor() {
    this.clientes = [];
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
    console.log(`Cliente ${cliente} entrou na fila.`);
  }

  atenderCliente() {
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente na fila.");
      return;
    }
    const clienteAtendido = this.clientes.shift();
    console.log(`Atendendo cliente ${clienteAtendido}.`);
  }
}

const atendimento = new Atendimento();
atendimento.adicionarCliente("João");
atendimento.adicionarCliente("Ana");
atendimento.atenderCliente(); // Saída: Atendendo cliente João.
atendimento.atenderCliente(); // Saída: Atendendo cliente Ana.