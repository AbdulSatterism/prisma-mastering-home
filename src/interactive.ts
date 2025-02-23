import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const interactive_transaction =async()=>{
    const result = await prisma.$transaction(async(ctx)=>{
        const find_user = await ctx.user.findMany({})


        //! update specific user where user id 1

        const update_user= await ctx.user.update({
            where:{
                id:1
            },
            data:{
                age:99
            }
        })

        return { find_user, update_user}

    });

    console.log(result)
}

interactive_transaction()