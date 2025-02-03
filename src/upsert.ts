import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

  const upsertMine =async()=>{

    const upsertUser = await prisma.post.upsert({
        where: {
          id:1  
        },
        update: {
            title: 'Want to be an Expert Backend Developer Insha-Allah',
        },
        create: {
            title: 'Want to be an Expert Backend Developer Insha-Allah',
        },
      });
      
      console.log(upsertUser)
  }
  
  upsertMine()