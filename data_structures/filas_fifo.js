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
    class playlistSpot extends FilaMercado{
      constructor(){
        super()
        this.playlist = []
      }
    adicionarMusica(nome){
      this.playlist.push(nome)
      console.log(`Música ${nome} adicionado com sucesso`)
    }
    tocarMusica(){
      if (this.isEmpty === true){
        console.log("A playlist está vazia. Adicione uma música na fila")
      }
      console.log(`Tocando a música ${this.playlist[0]}`)
      this.playlist.shift()
    }
    isEmpty(){
this.playlist.length() === 0;
    }
    }
    const Sequencia = new playlistSpot
    Sequencia.adicionarMusica("90210")
    Sequencia.adicionarMusica("4x4")
    Sequencia.adicionarMusica("AT THE PARTY")
    Sequencia.tocarMusica()
    Sequencia.tocarMusica()

    // 4. Use uma fila para implementar um sistema de envio de mensagens em lote.

    // 5. Crie uma fila que armazene processos pendentes e os execute na ordem de chegada.
    class Processos extends FilaMercado{
      constructor(){
        super()
        this.processos = []
      }
      isEmpty(){
        this.processos.length() === 0
      }
      novoProcesso(nome){
        this.processos.push(nome)
        console.log(`O processo ${nome} foi adicionado na fila`)
      }
      executarProcesso(){
        if (this.isEmpty === true){
          console.log(`Todos processos já foram executados`)
        }
        else{
          console.log(`Executando o processo ${this.processos[0]}`)
          this.processos.shift()
          if (this.isEmpty === false){
          let tamanho = this.processos.length()
          console.log(`Ainda faltam ${tamanho} processo(s) para serem executados.`)
        }
      }
    }
    }
    const papelada = new Processos
papelada.novoProcesso("Pog")
papelada.novoProcesso("Pog1")
papelada.novoProcesso("Pog2")
for (let i = 0; i < 3; i++) {
papelada.executarProcesso()
}
