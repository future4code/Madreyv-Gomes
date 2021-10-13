/*
Interpretação
1 - a) Verifica se um numero é par e de acordo com o resultado imprime no console uma palavra de aprovação ou reprovação;

b) Numeros pares;
c)ímpares;

2 - a) Verifica o valor de uma fruta pré cadastrada;
b) "O preço da fruta Maça é R$2.25
c) O preço da fruta Pêra é R$5

3 - a) Está pedindo ao usuário um numero, e assegurando que será realmente um numero.
b) Imprimira um erro, dizendo que a mensagem não foi declarada.
c) mensagem foi declarada dentro do bloco if. E não faz parte do escopo global.
 *

//1)
const idade = Number(prompt("Qual a sua idade?"));

if(idade >17){
    console.log("Você pode dirigir!")
}else{
    console.log("Você não pode dirigir!")
}

*
//2)
const turno = prompt("Qual o turno que você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno)" ).toUpperCase();

if(turno == "M"){
    console.log("Bom Dia!")
}else if(turno === "V"){
    console.log("Boa Tarde!")
}else{
    console.log("Boa Noite!")
}

*
//3)
const turno = prompt("Qual o turno que você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno)" ).toUpperCase();

switch(turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    default:
        console.log("Boa Noite!")
        break;
}

*
//Desafio 1)
const genero = prompt("Qual o genero do filme?").toUpperCase()
const preco = prompt("Qual o valor do ingreço?")

if(genero == "FANTASIA" && preco < 15){
    let lanchinho = prompt("Qual o lanchinho você vai comprar?")
    console.log(`Bom filme!
    e aproveite o seu ${lanchinho}`)
}else{
    console.log("Escolha outra filme :(")
}
*/

//Desafio 2)
const nome = prompt("Difite seu nome completo");
const tipoDeJogo = prompt(`Digite o seu tipo de jogo:
IN indica internacional
DO indica doméstico`).toUpperCase()
const etapa = prompt(`Digite a etapa do jogo:
SF indica semi-final; 
DT indica decisão de terceiro lugar;
FI indica final`).toUpperCase()
const categoria = prompt(`Digite a categoria do seu jogo:1, 2, 3 ou 4`)
const quantidade = Number(prompt("Qual a quantidade de ingressos?"));

function precoSF(categoria){
    switch(categoria){
        case 1:
            return 1320.00
            break
        case 2:
            return 880.00
            break
        case 3:
            return 550.00
            break
        default:
            return 220.00
    }
}
function precoDT(categoria){
    switch(categoria){
        case 1:
            return 660.00
            break
        case 2:
            return 440.00
            break
        case 3:
            return 330.00
            break
        default:
            return 170.00
    }
}
function precoFI(categoria){
    switch(categoria){
        case 1:
            return 1980.00
            break
        case 2:
            return 1320.00
            break
        case 3:
            return 880.00
            break
        default:
            return 330.00
    }
}

function imprimirIngresso(nomeCliente, tipoJogo, etapaJogo, categoria, quantidadeIngressos, valor){
    let dollar = 4.10
    let preco = valor
    if(tipoJogo === "IN"){
        preco = preco*dollar
        tipoJogo = "Internacional"
    }else{
        tipoJogo = "Nascional"
    }

    if(etapaJogo === "SF"){
        etapaJogo = "Semifinal"
    }else if( etapaJogo === "DT"){
        etapaJogo = "Decisão do 3º Lugar"
    }else{
        etapaJogo = "Final"
    }

    console.log(`   ---Dados da Compra ---
    Nome do cliente: ${nomeCliente}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo: ${etapaJogo}
    Categoria: ${categoria}
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos;
    ---Valores---
    Valor do ingresso: R$${preco}
    valor total: R$${preco*quantidadeIngressos}`)
}


let precoIngresso = 0;
switch(etapa){
    case "SF":
        precoIngresso = Number(precoSF(categoria))
        break
    case "DT":
        precoIngresso = precoDT(categoria)
        break
    default:
        precoIngresso = precoFI(categoria)
}

imprimirIngresso(nome, tipoDeJogo, etapa,categoria, quantidade, precoIngresso)


