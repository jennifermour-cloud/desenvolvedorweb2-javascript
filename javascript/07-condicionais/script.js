// if ( se condição for verdadeira)
const idade = 19

if(idade >=18){
    console.log("Boas-vindas á área VIP");

}

//else (se a condição for falsa)
 let idadeNova = 16;

 if(idadeNova >=18){
    console.log("Boas vindas á area VIP!");
}else{
    console.log("Você vai para a área kids!");
}

//else if (segunda condição se primeira não atendida)
let idadeInformada = 15;

if(idadeInformada >= 18){
    console.log("Boas vindas á area VIP");
    } else if(idadeInformada >=13 && idadeInformada <= 17){
        console.log("Você vai para Área Teen!");
    } else {
        console.log("Você vai para Área Kids!");
    }

//switch

let opcao = "pizza";

switch(opcao) { 
    case "pizza":
        console.log("Pizza chegando!");
        break;
    case "sushi":
        console.log("Sushi fresquinho!");
        break;
    case "hamburguer":
        console.log("Hambúrguer suculento!");
        break;
    default:
        console.log("Escolha inválida");

}