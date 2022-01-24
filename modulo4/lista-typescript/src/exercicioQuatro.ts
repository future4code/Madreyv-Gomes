const exemplo = [
	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
]

enum SETOR {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

type Funcioario = {
    nome: string,
    salario: number,
    setor : SETOR,
    presencial:boolean
}

const funcionarios = (pessoas: Array<object>) :Array<Funcioario> => {
    const funcionarios : Array<Funcioario>= pessoas.map((p:object)=>{
        let aux : Funcioario = p as Funcioario
        switch(aux.setor){
            case 'financeiro':
                aux.setor = SETOR.FINANCEIRO
                break
            case 'marketing':
                aux.setor = SETOR.MARKETING
                break
            case 'vendas':
                aux.setor = SETOR.VENDAS
                break
            default:
                console.log('setor não informado ou não cadastrado')
        }
        return aux
    })
    return funcionarios.filter((func) => {
        return func.setor === SETOR.MARKETING && func.presencial === true
    })
}

console.log(funcionarios(exemplo))