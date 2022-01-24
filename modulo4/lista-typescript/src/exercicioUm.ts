function imprimirFrase(nome:string, data:string):string{
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro']
    const dataSeparada = data.split("/")


    return `lá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${meses[ Number(dataSeparada[1]) - 1]} do ano de ${dataSeparada[2]}`
}

console.log(imprimirFrase('Madreyv', '20/01/1992'))