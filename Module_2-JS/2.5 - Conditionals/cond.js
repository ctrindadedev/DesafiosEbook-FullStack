// Crie um arquivo chamado idade_verificacao.js e use um if...else para verificar se a idade de uma pessoa permite que ela vote (idade >= 16). 
const idade = 16
if (idade >= 16) {
    console.log("Pode votar!")      
}
else {
    console.log("Não pode votar!")
    
}
// 🗳️2. Use um if...else para categorizar a velocidade de um carro (velocidade < 40: "Muito devagar", 40 <= velocidade normal", velocidade >= 80: "Muito rápido"). 🚗
const velocidade = 90
if (velocidade < 40) {
    console.log("Muito devagar, acelere!")
    
} 
else if (velocidade >= 40)
    {console.log("Velocidade normal!")

    
}
else{
    console.log("Muito rápido! Diminua!")
}
    
// 3. Crie um script que use um switch para exibir o nome do mês com base em um número (1 para janeiro, 2 para fevereiro, etc.). 📅
const mes = 3;
switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho") ;
        break;   
    case 8:
        console.log("Agosto");
            break; 
    case 9:
        console.log("Setembro");
        break;    
    case 10:
        console.log("Outubro");
        break;    
    case 11:
        console.log("Novembro");
        break;    
    case 12:
        console.log("Dezembro");
        break;
};
// 4. Crie um script que verifique se um número é par ou ímpar usando um if...else . 🔢
const num = 57
if (num%2 == 0 )  // == checa apenas o valor atribuido === checa também o tipo.
    {
        console.log(`${num} é um número par`)
    

}
else{
    console.log(`${num} é um número impar`)
}
// 5. Use um switch para exibir uma mensagem de saudação em diferentes
// idiomas com base em um código de idioma (por exemplo, "en" para inglês, "es" para espanhol, "fr" para francês). 🌐
const idioma = "en"
switch (idoma) {
    case "en":
        console.log("Vamos aprender inglês!")
        
        break;
    case "es":
        console.log("Vamos aprender espanhol!")
        
        break;
        case "pt":
        console.log("Vamos aprender português!")
        
        break;
// Executa o bloco de código se nenhum dos casos anteriores for verdadeiro.
    default:
        console.log("Vamos aprender latim!")
        break;
}