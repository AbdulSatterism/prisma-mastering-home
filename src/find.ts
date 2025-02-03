import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{


    //TODO: get all data 
     
    //* find all data  
    const result = await prisma.post.findMany()

    //! find first method throw error if not available
    //* findFirst user for get match first element
    const findFirst = await prisma.post.findFirstOrThrow({
        where:{
            id:2
        }
    })

//* findUnique use for only find by unique field otherwise throw error

const findUnique= await prisma.post.findUniqueOrThrow({
    where:{
        id:2
    }
})

console.log(result)



}


main()