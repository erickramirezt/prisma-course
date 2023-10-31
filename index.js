import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // CREATE
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Maria",
  //     email: "maria@gmail.com",
  //   },
  // });
  // console.log(newUser)

  // GET ALL
  // const users = await prisma.user.findMany()
  // console.log(users)

  // GET ONE
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Ryan",
  //   },
  // });
  // console.log(user);

  // const user = await prisma.user.findFirst({
  //   where: {
  //     OR: [{ id: 10 }, { email: "maria@gmail.com" }],
  //   },
  // });
  // console.log(user);

  // DELETE
  // try {
  //   const user = await prisma.user.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(user);
  // } catch (error) {
  //   if (error.code === "P2025") {
  //     console.log("usuario no encontrado");
  //   }
  // }

  // UPDATE
  // const user = await prisma.user.update({
  //   where: {
  //     id: 2,
  //   },
  //   data: {
  //     lastname: "Lastname X",
  //   },
  // });
  // console.log(user);

  // UPSERT
  // const user = await prisma.user.upsert({
  //   where: {
  //     id: 5,
  //   },
  //   create: {
  //     email: "joe@gmail.com",
  //     name: "Joe",
  //   },
  //   update: {
  //     lastname: "Carter",
  //   },
  // });
  // console.log(user);

  // CREATE WITH RELATION
  // const user = await prisma.user.findFirst({
  //   where: {
  //     id: 2,
  //   },
  // });

  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Mi primer publicación",
  //     content: "Este es el contenido",
  //     author: {
  //       connect: {
  //         id: user.id,
  //       },
  //     },
  //   },
  // });
  // console.log(newPost);

  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "donna",
  //     email: "donna@gmail.com",
  //     posts: {
  //       create: {
  //         title: "Mi primer post",
  //         content: "Este es el contenido",
  //       },
  //     },
  //   },
  // });
  // console.log(newUser);

  const users = await prisma.user.findMany({
    // where: {
    //   id: 10,
    // },
    include: {
      posts: true,
    }
  })
  console.log(users)
  users.forEach(user => {
    console.log('------------------')
    console.log(`User: ${user.name}`)
    console.log(`User: ${user.email}`)
    user.posts.forEach((post, i) => {
      console.log(`${i}`)
      console.log(`Post: ${post.title}`)
      console.log(`Post: ${post.content}`)
    })
  })
}

main();
