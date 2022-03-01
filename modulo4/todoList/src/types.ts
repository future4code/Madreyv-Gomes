export type User = {
    id: string,
    nome: string,
    apelido:string,
    email:string,
}

export type Tarefas = {
    titulo:string,
    descricao:string,
    dateLimite: Date,
    status:string,
    usuarioPedinte:string,
}

// As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: to do ("a fazer"), doing ("fazendo") e done ("feita").