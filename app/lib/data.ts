import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export async function fetchCategories() {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchSubCategories() {
  try {
    const subcategories = await prisma.subcategory.findMany();
    return subcategories;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}
// TODO fix the findMany to findUnique
export async function fetchSubcategoryWithProductIds(id : string) {
  try {
    const subcategorieswithproductIds = await prisma.subcategoryWithProductIds.findMany(
      {
        where: {
          subcategory_id: id
  }
  });
    return subcategorieswithproductIds;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchProduct(product_id : string) {
  try {
    const product = await prisma.product.findUnique(
      {
        where: {
          id_: product_id
   }
  } );
    return product;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}