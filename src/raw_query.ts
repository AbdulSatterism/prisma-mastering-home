import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

const rawQuery =async()=>{
const result = await prisma.$queryRaw`Select * from users`

console.log(result)
}
rawQuery()
