import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const main = async ()=>{
  //! offset pagination , skip , take

  const offsetPagination = await prisma.post.findMany({
    skip:5,
    take:2
  })


  //! cursor pagination , skip , and take same but cursor move immediately

  const cursorPanignation = await prisma.post.findMany({
    skip:5,
    take:3,
    cursor:{
        id:10
    }
  })


  //! sorting data and pagination 

  const sortingAndPagination = await prisma.post.findMany({
    orderBy:{id:'desc'},
// skip: 5,
// take: 2
  })

console.log(sortingAndPagination)


}


main()