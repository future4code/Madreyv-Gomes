/*
Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

RESPOSTA: NO CONSOLE IRÁ APARCER DUAS IMPRESSÕES, A PRIMEIRA SERÁ O VALOR DA VARIAVEL b, (10) NA SEGUNDA IMRPESSÃO SERÁ EXIBIDO O VALOR DA VARIAVEL a E b, (10, 5);

Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

RESPOSTA: SERÁ IMPRESSO: (10,10,10);

Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

RESPOSTAS:
VARIÁVEL p => horasTrabalhadasPorDia;
         t => valorDiaTrabalhado;


Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
Resposta: O tipo undefined foi impresso porque eu ainda não adcioneu nenhum valor a variável, fazendo com que ela fique apenas declarada como undefined.

Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
Resposta: Agora imprime o tipo da váriavel, porque o valor foi adcionado.
*/

/*
1)
let nome;
let idade;

console.log(typeof(nome), typeof(idade));

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?")

console.log(typeof(nome), typeof(idade));

2)
let perguntaUm = "Você tomou café hoje?";
let perguntaDois = "Você se exercitou hoje";
let perguntaTres = "Você tomou água hoje?";

let respostaUm = prompt(perguntaUm);
let respostaDois = prompt(perguntaDois);
let respostaTres = prompt(perguntaTres);

alert(` ${perguntaUm} -  ${respostaUm}`);
alert(` ${perguntaDois} -  ${respostaDois}`);
alert(` ${perguntaTres} -  ${respostaTres}`);*/

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let variavelTroca = a;
a = b;
b = variavelTroca;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

/*
Desafio: 
Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:

1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.

*/
let numeroUm = Number(prompt("Digite um numero!"));
let numeroDois =Number(prompt("Digite um numero!"));


console.log(`O primeiro número somado ao segundo número resulta em: ${numeroUm + numeroDois}`);

console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${numeroUm * numeroDois}`);