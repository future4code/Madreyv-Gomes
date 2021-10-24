/*
1. Leia o código abaixo
    
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

    
    a) O que vai ser impresso no console?
    10 e 50
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    Nada aconteceria, porque a função retorna um valor, mas não armazena em lugar nenhum.
    
2. Leia o código abaixo
    
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    
    
    a. Explique o que essa função faz e qual é sua utilidade
    A função coloca todos os caracteres de uma frase em minúscolo, e no final verifica se a palavra cenoura existe.
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` - true
         ii.  `CENOURA é bom pra vista` - true
         iii. `Cenouras crescem na terra` - true

*

function dadosPessoais(){
    return `Eu sou Madreyv, tenho 29 anos, moro em Rio das Ostras e sou estudante.`
}

function dadosPessoais( nome,  idade,  cidade,  profissao ){
    return `Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${profissao}.`
}
*
function soma(primeiroNumero, segundoNumero){
    return primeiroNumero + segundoNumero
}

console.log(soma(1,5));

function maiorOuIgual(primeiroNumero, segundoNumero){
    return primeiroNumero >= segundoNumero
}

console.log(maiorOuIgual(1,5));

function ePar(numero){
    return numero%2 === 0;
}
console.log(ePar(2));

function tamanhoParaMaiuscula(frase){
    console.log(frase.length, frase.toUpperCase())
}
tamanhoParaMaiuscula("Ouvi dizer!")
*

function soma(primeiroNumero, segundoNumero){
    return primeiroNumero + segundoNumero
}

function subtracao(primeiroNumero, segundoNumero){
    return primeiroNumero - segundoNumero
}

function multiplicacao(primeiroNumero, segundoNumero){
    return primeiroNumero * segundoNumero
}

function divisao(primeiroNumero, segundoNumero){
    return primeiroNumero / segundoNumero
}

let numeroUm = Number(prompt("Digite um numero"));
let numeroDois = Number(prompt("Digite o segundo Numero"));

console.log(`Numeros inseridos: ${numeroUm} e ${numeroDois}
Soma: ${soma(numeroUm, numeroDois)}
Diferença: ${subtracao(numeroUm, numeroDois)}
Multiplicação: ${multiplicacao(numeroUm, numeroDois)}
Divisão: ${divisao(numeroUm, numeroDois)}`)
*

const imprimirParametro = (texto) => {
    console.log(texto);
}

const soma = (parametroUm, parametroDois)=>{
    imprimirParametro(Number(parametroUm)+Number(parametroDois))
}

soma(30,3)

*/


