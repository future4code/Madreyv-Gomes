import connection from "./connection";

export default async function insertTask(id:string, title:string, description:string, deadline:string, author_id:string) {
    await connection.insert({
        id, title, description, deadline, author_id
    }).into('to_do_list_tasks')
}