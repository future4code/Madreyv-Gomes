```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let tamenho = arrayDeNumeros.filter((numero)=>{
    return numero === numeroEscolhido
  }).length;
  
  if(tamenho > 0){
    return `O número ${numeroEscolhido} aparece ${tamenho}x`
  }else{
    return "Número não encontrado"
  }
}

```