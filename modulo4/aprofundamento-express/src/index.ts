import express from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { Today } from '@material-ui/icons'

const app = express()

app.use(express.json())
app.use(cors())

//tipos
type toDos = {
    userId : string | number,
    id : string | number ,
    title : string,
    completed : boolean
}

//variaveis

let toDo : Array<toDos> = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 2,
      id: 3,
      title: "fugiat veniam minus",
      completed: true
    },
    {
      userId: 3,
      id: 4,
      title: "et porro tempora",
      completed: true
    },
]

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const adress = server.address() as AddressInfo;

        console.log(`server is running in http://localhost:${adress.port}`)

    }else{
        console.error('Failure upon starting server.');
    }
})


app.get("/ping", (req,res) => {
    res.send("pong")
})

app.get("/todos/:state", (req,res) => {
    let state = req.params.state === 'true'
    let filtered = toDo.filter((task) => {
        return task.completed === state
    })

    res.send(filtered)
})
app.get("/todos/user/:id", (req,res) => {
    let id = Number(req.params.id)
    let filtered = toDo.filter((task) => {
        return task.userId === id
    })
    let others = toDo.filter((task) => {
        return task.userId !== id
    })

    res.send(filtered)
})

app.post("/todos", (req,res)=>{
    let task : toDos = {
        id: Date.now(),
        userId: req.body[0].userId,
        title: req.body[0].title,
        completed: req.body[0].completed
    }
    
    console.log(task)
    toDo.push(task)
    res.send(toDo)
})

app.put("/todos/:id", (req,res)=>{
   let id = req.body[0].id
   toDo = toDo.map((task : toDos) =>  {
        if(task.id === id){
            task.completed = req.body[0].completed
        }
        return task
   })

   res.send(toDo)
}) 

app.delete("/todos/", (req, res) => {
    const id = Number(req.query.id)
    let aux : Array<toDos> = toDo.filter((task) => {
        return task.id !== id
    })
    
    toDo = aux

    res.send(toDo)
})
