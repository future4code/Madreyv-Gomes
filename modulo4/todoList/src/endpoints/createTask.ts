import{ Response, Request } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(req: Request, res:Response) {
    try {
        if(!req.body.title || 
            !req.body.description || 
            !req.body.deadline ||
            !req.body.author_id){

                res.status(400).send(
                    {message: 'Verifique se foram preenchidos todos os campos!'}
                )

                return
        }
        const dateDiff:number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()   

        if(dateDiff < 0){
            res.status(400).send(
                {message: 'DeadLine deve ser no mínimo a data de hoje!'}
            )

            return
        }
        const id: string = Date.now() + Math.random().toString();
        const deadLine = moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD')

        await insertTask(id, req.body.title , req.body.description, deadLine ,
            req.body.author_id);

        res.status(200).send({
            message: 'Sucesso!',
            id
        })
        
    } catch (error:any) {
        res.status(400).send(
            {message: error.message || error.sqlMessage}
        )
    }
}