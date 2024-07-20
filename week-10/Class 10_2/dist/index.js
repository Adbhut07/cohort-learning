"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                username: username,
            }
        });
        console.log(user);
    });
}
getUser("adbhut@gmail.com");
