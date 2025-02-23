import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const aggregate = async()=>{

  

    // const avg_age = await prisma.user.update({
    //     where: {
    //         id: 4
    //     },
    //    data:{
    //     age:35
    //    }
    // })

      //! aggregate for calculate user avarage age

    const avg_age = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })

    console.log(avg_age)
}


aggregate()