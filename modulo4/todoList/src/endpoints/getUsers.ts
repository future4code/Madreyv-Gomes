import{ Response, Request } from "express";
import selectUsers from "../data/selectUsers";

export default async function getUser(req: Request, res:Response) {
    try {

        const user = await selectUsers()
        
        if(!user) res.status(404).send('Não possuimos usuarios cadastrados')

        res.status(200).send({
            user
        })
        
    } catch (error:any) {
        res.status(400).send(
            {message: error.message || error.sqlMessage}
        )
    }
}