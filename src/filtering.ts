import { PrismaClient, USER_ROLE } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{

  //! and filtering 

// const and_filtering = await prisma.post.findMany({
//     where:{
//         AND:[
//             {
//                 published:true
//             },
//             {
//                 title:{
//                     contains:'Javascript'
//                 }
//             }
//         ]
//     }
// });

//! OR filtering

const or_filtering= await prisma.post.findMany({
    where:{
        OR:[
            {
                published:true
            },
            {
                published:false
            }
        ]
    }
})
  console.log(or_filtering)

}


main()