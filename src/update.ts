import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{
  
    //! update single data for update keyword

    // const updateOne =await prisma.post.update({
    //     where:{
    //         id: 1
    //     },
    //     data:{
    //         title:"mastering the main fetch"
    //     }
    // })

    //TODO: updat many 
    /*
    const updateMany = await prisma.post.updateMany({
        where: {
            id: {
                in: [1, 2]
            }
        },
        data: {
            title: "update at a time"
        }
    })

   */

// console.log(updateMany)

}


main()