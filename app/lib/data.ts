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
export async function fetchSubcategoryWithProductIds(id: string) {
  try {
    const subcategorieswithproductIds =
      await prisma.subcategoryWithProductIds.findMany({
        where: {
          subcategory_id: id,
        },
      });
    return subcategorieswithproductIds;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchProduct(product_id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id_: product_id,
      },
    });
    return product;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchFavoriteProducts(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchProducts3D() {
  try {
    const products3D = await prisma.productWith3d.findMany({
      include: {
        product: true,
      },
    });
    return products3D;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch 3D products.');
  }
}

export const ITEMS_PER_PAGE = 6;
export async function searchProducts(query: string, currentPage: number = 1) {
  const skip = (currentPage - 1) * ITEMS_PER_PAGE; // Calculate the number of items to skip

  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: 'insensitive', // Case-insensitive
          },
        },
        {
          typeName: {
            contains: query,
            mode: 'insensitive', // Case-insensitive
          },
        },
      ],
    },
    take: ITEMS_PER_PAGE,
    skip: skip,
    orderBy: {
      name: 'asc',
    },
  });

  return products;
}

export async function getPagesCount(query: string) {
  const totalItems = await prisma.product.count({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: 'insensitive', // Case-insensitive
          },
        },
        {
          typeName: {
            contains: query,
            mode: 'insensitive', // Case-insensitive
          },
        },
      ],
    },
  });
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return totalPages;
}

export async function fetchUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}
