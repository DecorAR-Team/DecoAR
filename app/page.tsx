import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  // const cats = await prisma.subcategoryWithProductIds.findMany();
  // console.log(cats);

  // const categoryWithSubcategories = await prisma.subcategory.findUnique({
  //   where: { id: '667aac74547fb73491fc8d0a' },
  //   include: { category: true },
  // });
  // console.log(categoryWithSubcategories);

  // const productWith3d = await prisma.productWith3d.findUnique({
  //   where: { id: '667ad8c6547fb73491fc9140' },
  // });

  return <div>Check the console</div>;
}
