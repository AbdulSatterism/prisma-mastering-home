import { PrismaClient, USER_ROLE } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{

    //! create user
 
// const createUser = await prisma.user.create({
//     data:{
//         username:"user4",
//         email:'user4@gmail.com',
//         role: USER_ROLE.user
//     }
// })



// const createProfile = await prisma.profile.create({
//     data:{
//         bio:"this is profile bio..",
//         userId:4
//     }
// })


// const create_category = await prisma.category.create({
//     data:{
//         name:"Computer Science and Engineering"
//     }
// })



// const create_post = await prisma.post.create({
//     data:{
//         title:"Javascript Mastering",
//         content:"Learning Javascript Easy Way",
//         authorId:3
//     }
// })
// console.log(create_post)

}


main()