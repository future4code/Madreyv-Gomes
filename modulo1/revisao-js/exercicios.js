// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(primeiro, segundo){
        return primeiro - segundo
    }
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novoArray = [];
  for (const numero of array) {
      if(Number(numero)%2 === 0) novoArray.push(numero)
  }
  return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((numero)=>{
        return numero % 2 === 0
    }).map((numero)=>{
        return numero * numero
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for (const numero of array) {
        if(numero > maior) maior = numero
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = retornaMaiorNumero([num1, num2]);
    let menor = num1;
    
    if(num2 < num1) menor = num2

    return{
        maiorNumero : maior, 
        maiorDivisivelPorMenor: Boolean(maior%menor === 0),
        diferenca: maior - menor
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeros = [0];
    let contador = 1;
    while(numeros.length < n){
        if(contador % 2 === 0) numeros.push(contador)
        contador++;
    }
   return numeros;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if( ladoA === ladoB && ladoB === ladoC) {
            return "Equilátero"
    }else if(ladoA === ladoB || ladoB === ladoC || ladoC == ladoA){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenado = retornaArrayOrdenado(array);
    return [ordenado[ordenado.length - 2], ordenado[1]];
  
}

// EXERCÍCIO 11
function imprimirAtores(array){
    let string = ""
    for(let i = 0; i<= array.length - 2; i++){
        string += `${array[i]}, `
    }
    string += `${array[array.length - 1]}`
    return string
}
function retornaChamadaDeFilme(filme) {
    return`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${imprimirAtores(filme.atores)}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((pessoa)=>{
        const idade = pessoa.idade > 14 && pessoa.idade < 60
        const tamanho = pessoa.altura >= 1.5
        return idade && tamanho 
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa)=>{
        const idade = pessoa.idade > 14 && pessoa.idade < 60
        const tamanho = pessoa.altura >= 1.5
        return !(idade && tamanho) 
   })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  return contas.map((conta)=>{
       let soma = conta.compras.reduce((acc,cur) => acc+ cur , 0);
       let saldo = conta.saldoTotal
       return {...conta, saldoTotal: saldo - soma, compras: []}
   })

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   return consultas.sort((primeira, segunda)=>{
       if(primeira.nome < segunda.nome){
           return -1
       }else if(primeira.nome > segunda.nome){
            return 1
       } else{
           return 0
       }
   })
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((primeira, segunda)=>{
        if(primeira.dataDaConsulta < segunda.dataDaConsulta){
            return -1
        }else if(primeira.dataDaConsulta > segunda.dataDaConsulta){
             return 1
        } else{
            return 0
        }
    })
}