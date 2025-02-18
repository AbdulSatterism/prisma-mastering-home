import { PrismaClient, USER_ROLE } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{

//! find post data

// const result = await prisma.user.findUnique({
//     where:{
//         id:1
//     },
//     include:{
//         profile:true
//     }
// })
//! method 2
// const result = await prisma.user.findUnique({
//     where:{
//         id:1
//     }
// }).profile()


// const result = await prisma.user.findMany({
//     include:{
//         posts:true
//     }
// })

//! include and give condition
const result = await prisma.user.findMany({
    include:{
        posts:{
            where:{
                published:false
            }
        }
    }
})
console.dir(result,{depth:Infinity})

}


main()