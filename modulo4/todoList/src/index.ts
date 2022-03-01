import app from "./data/app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getTask from "./endpoints/getTask";
import getTasksByAuthor from "./endpoints/getTasksByAuthor";
import getUser from "./endpoints/getUser";
import getUsers from "./endpoints/getUsers";

app.post('/users', createUser)

app.get('/user/all', getUsers)
app.get('/user/:id', getUser)

app.put('/users/edit/:id', editUser)

app.post('/task', createTask)
app.get('/task/:id', getTask)
app.get('/tasks/:author_id', getTasksByAuthor)