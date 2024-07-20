// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:23092209@localhost/postgres"
})

async function insertUsersTable(username: string, password: string, email: string ) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3);                     
    `, [username, password, email])
    console.log(result) 
}

//by using $1, $2 ---- we can get rid of sql injection problem which is very essential 

insertUsersTable("Anahad", "1811", "anahad@gmail.com");