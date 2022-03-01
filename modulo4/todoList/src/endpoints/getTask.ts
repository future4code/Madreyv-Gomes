import{ Response, Request } from "express";
import moment from "moment";
import selectTaskById from "../data/selectTaskByID";

export default async function getTask(req: Request, res:Response) {
    try {

        const task = await selectTaskById(req.params.id)
        
        if(!task){
            res.status(404).send('Tarefa não encontrada!')
            return
        } 

        console.log(task)
        res.status(200).send({
            id: task.id,
            title: task.title,
            description: task.description,
            status:task.status,
            deadline:moment(task.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            author_id:task.author_id,
            authorNickname: task.nickname
        })
        
    } catch (error:any) {
        res.status(400).send(
            {message: error.message || error.sqlMessage}
        )
    }
}