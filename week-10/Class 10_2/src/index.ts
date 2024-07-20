import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/*
async function insertUser(username: string,password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        },
        select:{
            id: true,
            password: true,
            firstName: true
        }

    })
    console.log(res);
}
insertUser("adbhut2@gmail.com", "password", "adbhut2", "satsangi");
*/

/*
interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
      where: {username: username},
      data: {
        firstName,
        lastName
    }
  })
  console.log(res);
}

updateUser('adbhut@gmail.com', {
    firstName: 'Adbhut_01',
    lastName: 'Satsangi'
}).then(()=>{
    console.log("user updated")
}).catch((e)=>{
    console.error(e)
}).finally(async () =>{
    await prisma.$disconnect()
})
*/

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        username: username,
    }
  })
  console.log(user);
}

getUser("adbhut@gmail.com");
