//Estrutura Básica:
  //enqueue Adiciona um elemento ao final da fila
  //dequeue Remove o elemento da frente da fila
  //front Retorna o elemento na frente da fila
  //isEmpty Verifica se a fila está vazia

//Dicas Importantes
//Filas são Ideais para Processos Sequenciais:
   // Use filas para situações em que as tarefas precisam ser concluídas na ordem em que foram recebidas.
    
//Evite Operações Ineficientes:
  // Usar `shift` em arrays pode ser lento para filas muito grandes. Considere usar bibliotecas especializadas para filas maiores.
    
//Filas em Sistemas Reais:
  // Muitas filas em sistemas reais são implementadas usando estruturas mais complexas, como filas circulares.
  //Desafios
    // 1. Implemente uma fila que gerencie o atendimento de clientes em um restaurante.
    class FilaMercado{
      constructor(){
        this.ordem = [];
      }
queue(){
  console.log(this.ordem)
}
enqueue(cliente){
  this.ordem.push(cliente)
  console.log(`O cliente ${cliente} entrou na fila` )
}
dequeue(){
  if (this.isEmpty === true){
    console.log("Não há mais clientes na fila.")
  }
  else{
  console.log(`Bem-vindo ao LeParaiba! O que você deseja? Senhor(a) ${this.ordem[0]}`)
  console.log(`${this.ordem[0]} foi atendido!`)
  this.ordem.shift()
  }
}
isEmpty(){
  this.ordem.length() === 0
}
  }
let restaurante = new FilaMercado()
restaurante.enqueue("Caio")
restaurante.enqueue("Gutzz")
restaurante.dequeue()
restaurante.dequeue()
    // 2. Crie uma fila que armazene músicas em uma playlist e remova a música quando for tocada.

    // 4. Use uma fila para implementar um sistema de envio de mensagens em lote.

    // 5. Crie uma fila que armazene processos pendentes e os execute na ordem de chegada.