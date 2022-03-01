import connection from "./connection";

export default async function selectTaskByAuthorID(id:string) {
   const result = await connection.raw(`
      select * from to_do_list_tasks where author_id = '${id}'
   `)

   return result[0][0]
}