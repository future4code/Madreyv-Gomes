import{ Response, Request } from "express";
import moment from "moment";
import selectTaskByAuthorID from "../data/selectTaskByAuthorID";
import selectTaskById from "../data/selectTaskByID";

export default async function getTasksByAuthor(req: Request, res:Response) {
    try {

        const task = await selectTaskByAuthorID(req.params.author_id)
        
        if(!task){
            res.status(404).send('Não existe tarefas para o usuário!')
            return
        } 

        res.status(200).send({task})
        
    } catch (error:any) {
        res.status(400).send(
            {message: error.message || error.sqlMessage}
        )
    }
}