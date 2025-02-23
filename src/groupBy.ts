import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const groupBy =async()=>{
//* use group by and having

const group_by = await prisma.post.groupBy({
    by:'published',
    _count:{
        title:true
    }
})

//! having and where same
const having = await prisma.post.groupBy({
    by:'published',
    _count:{
        title:true
    },
    having:{
        published:true
    }
})

console.log(group_by)
}

groupBy()