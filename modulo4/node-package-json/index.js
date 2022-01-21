// const nome = process.argv[2]
// const idade = process.argv[3]

// const frase = ()=>{
//     console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${+idade +7}`)
// }

// const operation = process.argv[2]
// const firstNumber = Number(process.argv[3])
// const secondNumber = Number(process.argv[4])

// const makeOperation = ()=>{
//     switch(operation){
//         case "sun":
//             return `Resposta: ${firstNumber + secondNumber}`
//             break;
//         case 'sub':
//             return `Resposta: ${firstNumber - secondNumber}`
//             break;
//         case 'mult':
//             return `Resposta: ${firstNumber * secondNumber}`
//             break;
//         case 'div':
//             return `Resposta: ${firstNumber / secondNumber}`
//             break
//         default:
//             return 'Operação desconhecida'

//     }
    
// }

// console.log(makeOperation())

const tarefas = ["Lavar Louça", "Comprar pão"]

const addTarefas = (novaTarefa)=>{
    tarefas.push(novaTarefa)
    console.log(tarefas)
}

addTarefas(process.argv[2])