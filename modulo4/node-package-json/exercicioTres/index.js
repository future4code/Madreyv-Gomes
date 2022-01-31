const tarefas = ["Lavar Louça", "Comprar pão"]

const addTarefas = (novaTarefa)=>{
    tarefas.push(novaTarefa)
    console.log(tarefas)
}

addTarefas(process.argv[2])