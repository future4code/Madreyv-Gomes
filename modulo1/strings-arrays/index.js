/*
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log**('f. ', valor)

Resposta
impressões: 
a. undefined, 
b. null,
c.10, 
d.3; 
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

Resposta = SUBI NUM ONIBUS EM MARROCOS, 26


const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu email?");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

*

const comidas = ["pizza", "bolo", "aligot", "torta de maça"]

console.log(comidas);
console.log(`Essas são as minhas comidas preferidas:\n ${comidas[0]} \n ${comidas[1]}\n ${comidas[2]}\n ${comidas[3]}\n ${comidas[4]}`)

const comidaUsuario = prompt("Qual a sua comida preferida?")

let novaLista = comidas;
novaLista[1] = comidaUsuario;
console.log(novaLista);
*

const listaDeTarefas = Array();
listaDeTarefas.push(prompt("Diga uma tarefa que precise realizar!"));
listaDeTarefas.push(prompt("Diga mais uma tarefa que precise realizar!"));
listaDeTarefas.push(prompt("Diga uma outra tarefa que precise realizar!"));

console.log(listaDeTarefas);
let indice = prompt(`Digite: \n 0 - para cumprir a tarefa ${listaDeTarefas[0]}\n 1 - para cumprir a tarefa ${listaDeTarefas[1]} \n 2 - para cumprir a tarefa ${listaDeTarefas[2]}  `)
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas);
*/