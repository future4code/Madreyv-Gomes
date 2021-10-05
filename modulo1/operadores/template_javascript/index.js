/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

Respostas:
1º console -> a. false,
2º console -> b. false,
3º console -> c. verdadeiro,
4º console -> d. boolean,

2 - 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta: Se ele está tentando realizar uma somo, ele precisa primeiro converter as Strings para numero usando o Number();

3 -
Resposta - Mudança a realizar no código
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
 

let idadeUsuario = Number(prompt("Qual é a sua idade?"))
let idadeMelhoAmigo =  Number(prompt("Qual é a idade do seu melhor amigo?"))
let resposta = idadeUsuario > idadeMelhoAmigo;
console.log(`Sua idade é maior do que a do seu melhor amigo? ${resposta}`)


let numeroPar = Number(prompt(`Insira um numero par!`))
console.log(`${numeroPar%2}`)

Se o usuario inserir um numero impar o resto será um numero diferente de zero

let idadeUsuario = Number(prompt("Qual é a sua idade?"))
console.log(`Sua idade em anos é ${idadeUsuario}, em dias é ${idadeUsuario*365} e a sua idade em horas é ${(idadeUsuario*365)*730}`)

*/
let numeroUm = Number(prompt(`Insira um numero!`))
let numeroDois = Number(prompt(`Insira outro numero!`))

console.log(`O primeiro numero é maior que segundo? ${numeroUm > numeroDois}`)

console.log(`O primeiro numero é igual ao segundo? ${numeroUm == numeroDois}`)

console.log(`O primeiro numero é divisível pelo segundo? ${numeroUm%numeroDois == 0}`)

console.log(`O segundo numero é divisível pelo primeiro? ${numeroDois % numeroUm == 0}`)

