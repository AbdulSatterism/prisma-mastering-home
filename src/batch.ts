import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const batch_transaction = async()=>{

    //! create user and update with transaction 

    const [create_user, updata_user] = await prisma.$transaction([
        prisma.user.create({
          data: {
            username: 'PH',
            email: 'ph@gmail.com',
            age: 49,
            role: 'admin',
          },
        }),
        prisma.user.update({
          where: {
            id: 5,
          },
          data: {
            username: 'abdul satter',
            email: 'abdulsatter@gmail.com',
          },
        }),
      ])
  
      console.log(create_user, updata_user)


}

batch_transaction()