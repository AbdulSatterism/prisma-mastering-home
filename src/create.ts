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

// const createManyAndReturn = await prisma.post.createManyAndReturn({
//     data:[
//         {
//             title: 'Node.js mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Node.js mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'React mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'React mastering is a mastering course for frontend developers'
//         },
//         {
//             title: 'Vue.js mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Vue.js mastering is a mastering course for frontend developers'
//         },
//         {
//             title: 'Angular mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'Angular mastering is a mastering course for frontend developers'
//         },
//         {
//             title: 'Python mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Python mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Django mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'Django mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Flask mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Flask mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Ruby mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'Ruby mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Rails mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Rails mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Java mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'Java mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Spring mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Spring mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'C# mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'C# mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'ASP.NET mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'ASP.NET mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'PHP mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'PHP mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Laravel mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Laravel mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Go mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'Go mastering is a mastering course for backend developers'
//         },
//         {
//             title: 'Kubernetes mastering',
//             published: true,
//             authorName: 'abdul satter',
//             content: 'Kubernetes mastering is a mastering course for DevOps engineers'
//         },
//         {
//             title: 'Terraform mastering',
//             published: false,
//             authorName: 'abdul satter',
//             content: 'Terraform mastering is a mastering course for DevOps engineers'
//         }
//     ]

// })



// console.log(createManyAndReturn)

}


main()