import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // Create Data
  //   const result = await prisma.post.create({
  //     data:{
  //         title :"This is title 2",
  //         content:"This is content 2",
  //         authorName:"Humayun Kabir"
  //     }
  //   });
  //   console.log(result);

  // Create Multiple Data Into DB

  const result = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "Author 2",
      },
    ],
  });

  console.log(result);
};

main();
