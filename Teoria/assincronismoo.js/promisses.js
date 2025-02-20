function pedirPizza(sabor) {
    return new Promise((resolve, reject) => { //e significa "em breve vou ter uma resposta".
        console.log(`🔄 Pedido de pizza de ${sabor} enviado...`);

        setTimeout(() => {
            if (sabor === "calabresa") {
                resolve(`🍕 Pizza de ${sabor} está pronta!`);
            } else {
                reject(`❌ Desculpe, não temos pizza de ${sabor}.`);
            }
        }, 2000); // Simulando tempo de espera (2 segundos)
    });
}
pedirPizza("calabresaa")
    .then((mensagem) => { //then mostra o resolve
        console.log(mensagem); 
    })
    .catch((erro) => { //catch mostra o reject
        console.log(erro); 
    });