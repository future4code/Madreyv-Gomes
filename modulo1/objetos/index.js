/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?
Matheus Nachtergaele, Virginia Cavendish, {canal: "Globo", horario: "14h"}

```jsx
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
```

a) O que vai ser impresso no console?
cachorro = {nome: "Juca",idade: 3,raca: "SRD"}
gato = {nome: "Juba", idade: 3, raca: "SRD"}
tartaruga = {nome: "Juco", idade: 3,raca: "SRD"}
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
O spread operator faz uma cópia do objeto e passa ele inteiro.

```jsx
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
```

a) O que vai ser impresso no console?
false
undefined
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Aconteceu pq a propriedade altura não foi definida.
*

function apresentacao(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

const outraPessoa = {...pessoa, apelidos: ["Mandy", "Billy", "Puro Osso"]}
apresentacao(pessoa);
apresentacao(outraPessoa);
*

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    profissao: "Programador"
}

const outraPessoa = {
    nome:"João",
    idade: 50,
    profissao: "Padeiro"
}

function objetosParaArray(objeto){
    return[objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(objetosParaArray(pessoa));

*

const carrinho = [];

const fruta = {
    nome: "banana",
    disponibilidade: true,
}

const frutaDois = {...fruta, nome: "Abacaxi"}
const frutatres = {...fruta, nome: "Morango"}

function adcionarAoCarrinho(objeto){
    carrinho.push(objeto);
}

adcionarAoCarrinho(fruta);
adcionarAoCarrinho(frutaDois);
adcionarAoCarrinho(frutatres);
console.log(carrinho);

Desafios
*

function criarUsuario(){
    const nomeUsuario = prompt("Qual o seu nome?")
    const idadeUsuario = prompt("Qual a sua idade?")
    const profissaoUsuario = prompt("Qual a sua profissão?")

    const usuario = {
        nome: nomeUsuario,
        idade : idadeUsuario,
        profissao: profissaoUsuario
    }

    return usuario;
}

const usuario = criarUsuario();
console.log(usuario, typeof(usuario));

*
const filmeAcao = {
    nome : "filme Qualquer de Ação",
    ano: 2019,
}

const filmeComedia = {
    nome: "Qualquer filme do Adan Sandler",
    ano: 2020,
}

function compararFilmes(filmeA, filmeB){
    let antes = filmeA.ano < filmeB.ano
    let mesmo = filmeB.ano === filmeA.ano
    return `O ${filmeA.nome} foi lançado antes do ${filmeB.nome}? ${antes}
    O ${filmeA.nome} foi lançado no mesmo ano do ${filmeB.nome}? ${mesmo}`
}

console.log(compararFilmes(filmeAcao, filmeComedia))

*/

const carrinho = [];

const fruta = {
    nome: "banana",
    disponibilidade: true,
}

const frutaDois = {...fruta, nome: "Abacaxi"}
const frutatres = {...fruta, nome: "Morango"}

function adcionarAoCarrinho(objeto){
    carrinho.push(objeto);
}

function controleEstoque(fruta){
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta
}

adcionarAoCarrinho(fruta);
adcionarAoCarrinho(frutaDois);
adcionarAoCarrinho(frutatres);
console.log(carrinho);
console.log(controleEstoque(frutaDois));
