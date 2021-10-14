/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
RESPOSTA: 10
    
2. Leia o código abaixo:
    
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    
    
    a) O que vai ser impresso no console?
    19, 21, 23, 25, 27, 30
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    Seria possivel sim, se declarassemos uma variavel fora e depois incrementar o valor dentro
    
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
  
  const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
  let quantidadeAtual = 0
  while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
      linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
  }
  *
  **
  ***
  ****
    
*

//1- 

const quantidadeBichos = Number(prompt("Quantos bichos de estimação você tem?"))
let nomes = [];
if(quantidadeBichos <= 0){
  console.log("Que pena! Você pode adotar um pet!");
}else{
  let controlador = 0;
  while(controlador < quantidadeBichos){
    nomes.push(prompt("Digite o nome dos seus animais!"))
    controlador++;
  }
}

for(let animais of nomes){
  console.log(animais);
}

*

//2-

function imprimirValores(array){
  for(let valor of array){
    console.log(valor)
  }
}

function imprimirDividindoPorDez(array){
  for(let valor of array){
    console.log(valor/10)
  }
}

function numerosPares(array){
  let novoArray = [];

  for(let valor of array){
    if(valor%2 === 0){
      novoArray.push(valor)
    }
  }
  for( let valor of novoArray){
    console.log(valor)
  }
}
function imprimirIndiceEValor(array){
  let novoArray = [];
  let i = 0;
  for(let valor of array){
    novoArray.push(`O elemento do índex ${i} é: ${valor}`)
    i++
  }
  for( let valor of novoArray){
    console.log(valor)
  }
}

function maiorMenor(array){
  let maior = 0;
  let menor = array[0];

  for(let valor of array){
    if(valor > maior){
      maior = valor
    }

    if(valor < menor){
      menor = valor
    }
  }

  console.log(`Maior = ${maior} e Menor = ${menor}`)
}

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//imprimirValores(array);
//imprimirDividindoPorDez(array)
//numerosPares(array)
//imprimirIndiceEValor(array);
maiorMenor(array);
*/

function advinheOnumero(numeroPensado){
  //const numeroPensado = Number(prompt("Qual numero você está pensando?"))
  let i = 1;
  let chute = Number(prompt("Digite um numero:"))
  while(chute != numeroPensado){
    console.log(`O número chutado foi: ${chute}`)
    if(numeroPensado > chute){
      console.log("Errrrrrrrou, é maior")
    }else{
      console.log("Errrrrrrrou, é menor")
    }

    i++;
    chute = Number(prompt("Digite um numero:"))
  }
  console.log(`O número chutado foi: ${chute}`)
  console.log(`Acertou!!
  O número de tentativas foi: ${i} `)
}
let numero = Math.floor(Math.random() * (100)) + 10
console.log(numero)
advinheOnumero(numero)