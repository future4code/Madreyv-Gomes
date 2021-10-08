// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura!"));
  const largura = Number(prompt("Digite a largura"));

  console.log(altura * largura);

}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const ano = Number(prompt("Qual o ano atual?"));
  const nascimento = Number(prompt("Qual o ano em que nasceu?"));
  console.log(ano - nascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome?");
  const idade = Number(prompt("Qual é a sua idade?"));
  const email = prompt("Qual é o seu email?");
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = [];
  cores.push(prompt("Me diga sua primeira cor preferida:"))
  cores.push(prompt("Me diga sua segunda cor preferida:"))
  cores.push(prompt("Me diga sua terceira cor preferida:"))

  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return Number(custo) / Number(valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let temp = array[0];
  array[0] = array[array.length-1]
  array[array.length-1] = temp

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const ano = Number(prompt("Qual o ano atual?"));
  const anoNascimento = Number(prompt("Qual o ano que você nasceu?"));
  const anoCarteira = Number(prompt("Qual o ano que retirou a sua carteira de identidade?"));
  const idade = ano - anoNascimento;
  const tempoCarteira =ano - anoCarteira;
  console.log((idade <= 20 && tempoCarteira%5 === 0) || ((idade > 20 && idade <= 50) && tempoCarteira>10) || idade > 50 && tempoCarteira>15)
}

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return Number(ano) % 400 == 0 || (Number(ano) % 4 == 0 && Number(ano) % 100 != 0);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade =prompt("Você tem mais de 18 anos?").toUpperCase() == "SIM"
  const escolaridade = prompt("Você possui ensino médio completo").toUpperCase() == "SIM"
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toUpperCase() == "SIM"

  console.log(idade && escolaridade && disponibilidade)

}