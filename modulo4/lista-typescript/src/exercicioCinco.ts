const exemplodois = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

type Usuario = {
    name:string,
    email:string,
    role : string
}

const emails = (funcionario : Array<object>) : Array<Object> => {
    let funcionarios : Array<Usuario> = funcionario.map((func) => {
        return func as Usuario
    })

    return funcionarios.filter((func) => {
        return func.role === 'admin'
    }).map((res)=>{
        return res.email
    })
}

console.log(emails(exemplodois))