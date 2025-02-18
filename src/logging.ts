import { PrismaClient, USER_ROLE } from "@prisma/client";


const prisma = new PrismaClient({
    log:[
        {
            emit:'event',
            level:'query'
        }
    ]
})


prisma.$on('query',(e)=>{
    console.log("duration=>",e.duration)
    console.log("timestamp=>",e.timestamp)
    console.log("query=>",e.query)
})


const main = async ()=>{

  //! and filtering 

const and_filtering = await prisma.post.findMany({});



}


main()