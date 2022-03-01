import connection from "./connection";

export default async function updateUser(id:string, name?: string, nickname?:string, email?:string) {

    if(name){
        await connection.raw(`
            update to_do_list_user set name = '${name}' where id = '${id}'
        `)
    }
    if(nickname){
        await connection.raw(`
            update to_do_list_user set nickname = '${nickname}' where id = '${id}'
        `)
    }
    if(email){
        await connection.raw(`
            update to_do_list_user set email = '${email}' where id = '${id}'
        `)
    }
    
}