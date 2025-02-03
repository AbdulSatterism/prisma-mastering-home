import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{

 //! create single data

    // const result = await prisma.post.create({
    //     data:{
    //         title:"This is an title 2",
    //         content:"Second content here",
    //         authorName:"Md. Abdul Satter"
    //     }
    // })


//! create multiple data in database 

const createMany = await prisma.post.createMany({
    data:[
        {
            title:'Prisma mastering',
            published:true,
            authorName:'abdul satter',
            content:"parisma mastering is a mastering course for posgres learner"
        },
        {
            title:'posgres mastering',
            published:true,
            authorName:'abdul satter',
            content:"parisma mastering is a mastering course for posgres learner"
        },
        {
            title:'Docker mastering',
            published:false,
            authorName:'abdul satter',
            content:"parisma mastering is a mastering course for posgres learner"
        },
        {
            title:'AWS mastering',
            published:true,
            authorName:'abdul satter',
            content:"parisma mastering is a mastering course for posgres learner"
        }
    ]
})


//! it's return and create 

const createManyAndReturn = await prisma.post.createManyAndReturn({
    data:[
        {
            title:'Javascript mastering',
            published:false,
            authorName:'abdul satter',
            content:"parisma mastering is a mastering course for posgres learner"
        },
        {
            title:'Typescript mastering',
            published:true,
            authorName:'abdul satter',
            content:"parisma mastering is a mastering course for posgres learner"
        }
    ]
})



console.log(createManyAndReturn)

}


main()