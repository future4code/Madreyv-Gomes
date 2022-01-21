const minhaString :string = "Se tentar atribuir um valor numerico, dá um erro pois o tipo é String"
const meuNumero :number = 9
//Para que aceite um numero tbm basta por o operador | e colocar o outro tipo.

enum ArcoIris {
    VERMELHA = "vermelha", 
    LARANHA = 'laranja', 
    AMARELA = 'amarela', 
    VERDE = 'verde', 
    AZUL = 'azul', 
    AZULESCURO = 'azul-escuro',
    VIOLETA =  'violeta'
}

type Pessoa = {
    nome : string,
    idade: number,
    corFavorita: ArcoIris
}
const v : Pessoa = {
    nome : "Madreyv",
    idade : 9,
    corFavorita : ArcoIris.AMARELA
}
const t : Pessoa = {
    nome : "Madreyv",
    idade : 9,
    corFavorita : ArcoIris.AZUL
}
const c : Pessoa = {
    nome : "Madreyv",
    idade : 9,
    corFavorita : ArcoIris.LARANHA
}