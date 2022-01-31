const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

const makeOperation = ()=>{
    switch(operation){
        case "sun":
            return `Resposta: ${firstNumber + secondNumber}`
            break;
        case 'sub':
            return `Resposta: ${firstNumber - secondNumber}`
            break;
        case 'mult':
            return `Resposta: ${firstNumber * secondNumber}`
            break;
        case 'div':
            return `Resposta: ${firstNumber / secondNumber}`
            break
        default:
            return 'Operação desconhecida'

    }
    
}

console.log(makeOperation())
