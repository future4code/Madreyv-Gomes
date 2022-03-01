import connection from "./connection";

export default async function selectUsers() {
   console.log('aqui')
   const result = await connection.raw(`select * from to_do_list_user`)
   return result[0];
}