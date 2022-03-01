import express from 'express';
import cors from 'cors'
import { Today } from '@material-ui/icons';

const app = express()

app.use(express.json())
app.use(cors())

//types

type Correntista = {
    nome:string,
    cpf:string,
    dataNascimento:Date,

}

type Transacoes = {
    descricao : string,
    valor: Number,
    data: Date
}
type ContaCorrente = {
    correntista:string
    saldo:Number
    extrato : Transacoes[]
}

//Globais
var correntistas : Correntista[] = [
    {
        nome : 'Madreyv',
        cpf : '33333333333',
        dataNascimento : new Date('1992-01-20')
    },
    {
        nome : 'Jeany',
        cpf : '33333333338',
        dataNascimento : new Date('1993-05-18')
    }
]
var contas : ContaCorrente[] = [{
    correntista : '33333333333',
    saldo : 500,
    extrato : [
        {
            descricao : 'Padaria',
            valor : 35.00,
            data: new Date('2022-01-20')
        }
    ]
}]

app.listen(3003 ,() => {
    console.log("Server is running in localhost: 3003")
})

app.get('/ping', (req , res) => {
    res.send('pong!')
})

app.get('/correntistas', (req, res) => {
    res.send(correntistas)
})

app.get('/conta/:cpf', (req, res) => {
    try {
        const cpf: string = req.params.cpf
        console.log('aqui')
    
        if(!cpf) throw new Error('Faltando o campo CPF')
        if(typeof cpf !== 'string') throw new Error('O campo CPF deve ser uma string')

        const filtered : ContaCorrente[] = contas.filter(conta => {
            return conta.correntista === cpf
        })

        console.log(filtered.length)
        if(filtered.length === 0) throw new Error('Conta não encontrada')

        const resposta : Object = {
            saldo : filtered[0].saldo
        }

        res.send(resposta)

    } catch (erro : any) {
        switch (erro.message) {
            case 'Faltando o campo CPF' || 'O campo CPF deve ser uma string' || 'Conta não encontrada':
                res.status(422)
                break;
            default:
                res.status(500)
                break;
        }

        res.send(erro.message || 'Erro inesperado')
    }
})

app.post('/correntista', (req,res) => {
    try{
        const nome : string = req.body.nome
        const cpf : string = req.body.cpf
        const dataNascimento : Date = new Date(Date.parse(req.body.dataNascimento)) 
        console.log()
        const hoje : Date = new Date()

        if(!nome) throw new Error("Faltando o campo NOME");
        if(!cpf) throw new Error('Faltando o campo CPF')
        if(!dataNascimento) throw new Error('Faltando o campo DATANASCIMENTO')
        
        if(typeof nome !== 'string') throw new Error('O campo NOME deve ser uma string')
        if(typeof cpf !== 'string') throw new Error('O campo CPF deve ser uma string')
        if(typeof req.body.dataNascimento !== 'string') throw new Error('O campo DATANASCIMENTO deve ser uma string')

        if((hoje.getFullYear() - dataNascimento.getFullYear()) < 18) throw new Error('O usuario precisa ter 18 anos ou mais.')
        if(contas.filter(conta => {
            return conta.correntista === cpf
        }).length > 0) throw new Error ('Cpf já vinculado a uma conta')

        const correntista : Correntista = {
            dataNascimento : dataNascimento,
            nome,
            cpf,
        }
        const conta: ContaCorrente = {
            correntista : cpf,
            saldo:0,
            extrato:[]
        }
        correntistas.push(correntista)
        contas.push(conta)
 
        const resposta : Object = {
            message :  'Usuario cadastrado com sucesso',
            usuario : correntista,
            dadosConta: conta
        }

        res.status(201)
        res.send(resposta)

    }catch(erro : any){
        switch (erro.message) {
            case "Faltando o campo NOME" || 'Faltando o campo CPF' || 'Faltando o campo DATANASCIMENTO':
                res.status(422)
                break;
            case  'O campo NOME deve ser uma string' || 'O campo CPF deve ser uma string' || 'O campo DATANASCIMENTO deve ser uma string':
                res.status(422)
                break;
            case 'O usuario precisa ter 18 anos ou mais.':
                res.status(422)
                break;
            default:
                res.status(500)
                break;
        }

        res.send(erro.message || 'Erro inesperado')
    }
})

app.put('/conta/:cpf/deposito', (req, res) => {
    try {
        const nome = req.body.nome
        const cpf = req.params.cpf
        const valor = Number(req.body.valor)

        if(!nome) throw new Error("Faltando o campo NOME");
        if(!cpf) throw new Error('Faltando o campo CPF')
        if(!valor) throw new Error('Faltando o campo VALOR')
        
        if(typeof nome !== 'string') throw new Error('O campo NOME deve ser uma string')
        if(typeof cpf !== 'string') throw new Error('O campo CPF deve ser uma string')
        if(typeof valor !== 'number') throw new Error('O campo VALOR deve ser um Number')

        const conta : ContaCorrente[] = contas.filter(conta =>{
            return conta.correntista === cpf
        }) 

        const correntista : Correntista[] = correntistas.filter(correntista => {
            return correntista.nome === nome
        })

        if(conta.length === 0 || correntista.length === 0 ) throw new Error ("Correntista não encontrado")

        let i = 0
        contas = contas.map((conta, index) => {
            if(conta.correntista === cpf) {
                conta.saldo = Number(conta.saldo) + Number(valor)
                i = index
            }

            return conta
        })
        const resposta : Object = {
            mensagem : `Saldo atualizado com sucesso. Saldo atual: R$${conta[i].saldo.toFixed(2)
            } `,
            saldo: conta[i].saldo.toFixed(2)
        }
        res.status(200)
        res.send(resposta)
        
    } catch (erro : any) {

        switch (erro.message) {
            case "Faltando o campo NOME" || 'Faltando o campo CPF' || 'Faltando o campo VALOR' || "Correntista não encontrado":
                res.status(422)
                break;
            case  'O campo NOME deve ser uma string' || 'O campo CPF deve ser uma string' || 'O campo VALOR deve ser um Number':
                res.status(422)
                break;
            default:
                res.status(500)
                break;
        }

        res.send(erro.message || 'Erro inesperado')
        
    }
})