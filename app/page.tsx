import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const cats = await prisma.subcategoryWithProductIds.findMany();
  console.log(cats);

  // const categoryWithSubcategories = await prisma.category.findUnique({
  //   where: { id: '66798544ee251e9881be4060' },
  //   include: { subcategories: true },
  // });
  // console.log(categoryWithSubcategories);

  return <div>Check the console</div>;
}
