import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {AddressInfo} from 'net';
import knex from 'knex';
import dotenv from 'dotenv';
import { Actor } from './types';

dotenv.config();

export const connection = knex({
    client:"mysql",
    connection:{
        host: process.env.DB_HOST,
        port: 3306,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME
    }
});

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
})

const getActors = async():Promise<any> =>{
    const result = await connection.raw(`select * from Actor`)

    return result[0]
}

const getActorByID = async(id: string) :Promise<any> => {
    const result = await connection.raw(`
    Select * from Actor where id = '${id}'
    `)

    return result[0][0]
}

const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

const countActors = async (gender: string): Promise<any> => {
    
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    
    const count = result[0][0].count;
    return count;
};

const updateActorSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
};

const createActor = async( actor: Actor): Promise<any> =>{
    await connection('Actor').insert(actor)
        .then(data => {
            // bring some data back otherwise 'data' logs as the ID of our newly saved cat
            return connection("Actor").select();
           });
}
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
};


app.get('/actors', async(req,res)=>{
    try{
        const result = await getActors();
        res.send(result)
    }catch(err:any){
        console.log(err.message);
        res.status(500).send("Deu ruim");
    }
})




app.get('/actors/id/:id', async(req: Request, res : Response) => {
    try{
        const id = req.params.id
        const result = await getActorByID(id);
        res.send(result)
    }catch(err:any){
        console.log(err.message)
        res.status(500).send("Unexpected error")
    }
})

app.get('/actor/name/:name', async(req, res)=>{
    try {
        const name = req.params.name;
        const result = await searchActorByName(name);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send("Unexpected error")
        
    }
})

app.get('/actor/gender/:gender', async(req, res)=>{
    try {
        const gender = req.params.gender;
        const result = await countActors(gender);
        res.status(200).send(result.toString());

    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error");
    }
})

app.post('/actors',async (req:Request, res: Response) => {
    try {
        const actor: Actor = {
            id: Date.now().toString(),
            nome: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birth_date,
            gender:req.body.gender
        }

       const response = await createActor(actor);
       res.status(200).send(response);
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error");
    }
})

app.put('/actors', async(req, res)=>{
    try {
        const id = req.body.id;
        const salario = req.body.salary;
        const result = await updateActorSalary(id,salario)
        res.status(200).send('Salario alterado com sucesso')
    } catch (error :any) {
        res.status(500).send("Deu ruim");

    }
})

app.delete('/actor/:id', async(req, res) =>{
    try {
        const id = req.params.id;
        await deleteActor(id);
        res.status(200).send('Ator deletado com sucesso!')
        
    } catch (error: any) {
        res.status(500).send("Unexpected error");
    }
})



app.get("/ping", (req, res) =>{
    res.send('pong!');
})

