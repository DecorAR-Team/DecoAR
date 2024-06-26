import { PrismaClient } from '@prisma/client';
import products from '../lib/json-data/products.json';

const prisma = new PrismaClient();

export default async function Home() {
  //TODO create an (overview) with root page, /[catID]/products and a common layout for these 2 pages: <SearchBar>,<NavBar>

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

  return <h1>HOME page</h1>;
}
