import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();

const relationalQueries = async () => {
  // Fluent Api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .post();
  console.log(result);
};

relationalQueries();
