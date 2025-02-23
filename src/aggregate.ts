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

    //! all age sum
    const sum_age= await prisma.user.aggregate({
        _sum:{
            age:true
        }
    })

    //! maximum all

    const max_age = await prisma.user.aggregate({
        _max:{
            age:true
        }
    })

    // console.log(max_age)
}


aggregate()