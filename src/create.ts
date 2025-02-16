import { PrismaClient, USER_ROLE } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{

    //! create user
 
// const createUser = await prisma.user.create({
//     data:{
//         username:"user3",
//         email:'user3@gmail.com',
//         role: USER_ROLE.user
//     }
// })

// const createProfile = await prisma.profile.create({
//     data:{
//         bio:"this is profile bio..",
//         userId:2
//     }
// })

// const create_category = await prisma.category.create({
//     data:{
//         name:"Software Development"
//     }
// })

const create_post = await prisma.post.create({
    data:{
        title:"Javascript Mastering",
        content:"Learning Javascript Easy Way",
        authorId:1
    }
})
console.log(create_post)

}


main()