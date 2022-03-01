import connection from "./connection";

export default async function selectTaskById(id:string) {
   const result = await connection.raw(`
      select tasks.*, nickname from to_do_list_tasks as tasks join to_do_list_user as user on author_id = user.id where tasks.id = '${id}'
   `)

   return result[0][0]
}