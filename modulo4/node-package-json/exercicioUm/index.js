const nome = process.argv[2]
const idade = process.argv[3]

const frase = ()=>{
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${+idade +7}`)
}