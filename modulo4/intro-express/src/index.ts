import express from 'express'
import cors from 'cors'

type User = {
    id: number | string
    name: string
    phone: string
    email:string
    website:string

}

type Post = {
    id: number | string
    title: string
    body: string
    userId: number | string
}

const users : Array<User> = [
    {
        id : 1,
        name : "Leanne Graham",
        email : "Sincere@april.biz",
        phone: '229999999990',
        website: 'www.teste.com.br'
    },
    {
        id : 2,
        name : "Rejane Graham",
        email : "sincerabutnot@april.biz",
        phone: '229999999990',
        website: 'www.teste.com.br'
    },
]

const posts : Array<Post> = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      userId: 2,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
]



const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})


app.get("/users", (req, res) => {          
    res.send(users.flat(1))
})

app.get("/posts", (req,res) => {
    res.send(posts)
})

app.get("/users/:id/posts",(req,res) => {
    const id = Number(req.params.id)

    const userPosts: Array<Post> = posts.filter((post) =>{
        return Number(post.userId) === id
    })

    res.send(userPosts)
})