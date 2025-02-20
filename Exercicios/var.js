
//Desafios 
    //2. Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.
        let preco = 40;
        let desconto = preco*0.80;
        console.log("O preço era", preco, "e com o desconto de 20% passou a ser", desconto)
    //3. Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.
        let favs = ["Arroz de Porco Zeh", "Frango aparmegiana", "Empadão"];
        console.log("Minha comida favorita é:", favs[1]);


    //4. Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.
            let livros = {
            titulo: "O primeiro programa JS de Caio",
            autor: "Eu mesmo",
            ano: "2025"
        };
        console.log(livros.autor, livros.titulo);

    //5. Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".
    estaLogado = false;
    console.log("Status de login", estaLogado)

    //6. Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.
    const PI = 3.14;
    let r = 5;
    area = PI*(r**2)
    console.log(area)