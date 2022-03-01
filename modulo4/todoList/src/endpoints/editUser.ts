import {Response, Request} from 'express'
import updateUser from '../data/updateUser'

export default async function editUser(req: Request, res: Response) {
    try {

        if(req.body.name === '' || req.body.nickname === '' || req.body.email === ''){
            res.status(400).send({
                message: 'Nenhum dos campos podem está em branco! '
            })
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message:'Escolha pelo menos um campo para alterar!'
            })
        }

        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({
            message:"Usuario alterado com sucesso!"
        })
        
    } catch (error:any) {
        res.status(400).send(
            {message: error.message || error.sqlMessage}
        )
    }
}