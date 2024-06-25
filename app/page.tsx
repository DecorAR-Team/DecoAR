import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export default async function Home() {
  // const cats = await db.category.findMany();
  // console.log(cats);

  // const categoryWithSubcategories = await db.category.findUnique({
  //   where: { id: '66798544ee251e9881be4060' },
  //   include: { subcategories: true },
  // });
  // console.log(categoryWithSubcategories);

  return <div>Check the console</div>;
}
