/*
1.  Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
    ```
    
    a) O que vai ser impresso no console?
    Ele vai imprimir o objeto inteiro dentro do array de objetos, depois o indice dele, e depois o objeto novamente;
    ex: { nome: "Amanda Rangel", apelido: "Mandi" }, 0, { nome: "Amanda Rangel", apelido: "Mandi" }
2. Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    
    console.log(novoArrayB)
    ```
    
    a) O que vai ser impresso no console?
    um array contendo só os nomes ["Amanda", "Laís", "leticia"]
3. Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)
    ```
    
    a) O que vai ser impresso no console?
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
*

//1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((pet)=>{
     return pet.nome;
 })
const salsichas = pets.filter((pet)=>{
    return !pet.raca.indexOf("Salsicha")
})
const poodle = pets.filter((pet) => {
    return !pet.raca.indexOf("Poodle")
}).map((pet)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
})
 console.log(poodle);

 *

 //2
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((produto)=>{
     return produto.nome
 })

 const descontos = produtos.map((produto)=>{
     return {nome: produto.nome, preco: (produto.preco - (produto.preco*5/100))}
 })
const bebidas = produtos.filter((produto)=>{
    return !produto.categoria.indexOf("Bebidas")
})

const ype = produtos.filter((produto)=>{
    return produto.nome.includes("Ypê")
})

const fraseCompra = produtos.map((produto)=>{
    return `Compre ${produto.nome} por ${produto.preco}`
})
 console.log(fraseCompra)
*/

//Desafios
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const nomesEmOrdem = pokemons.map((pokemon)=>{
    return pokemon.nome
}).sort();
 const tipo = pokemons.map((pokemon) => {
     return pokemon.tipo
 }).reduce((acumulador, atual)=>{
     if(acumulador.length === 0 || acumulador[acumulador.length - 1]!= atual){
         acumulador.push(atual)
     }
     return acumulador
 },array)
console.log(tipo)


