'use server';

import { prisma } from './data';

export async function getSubcategories(categoryId: string) {
  try {
    const subcategories = await prisma.subcategory.findMany({
      where: {
        category_id: categoryId,
      },
    });
    return subcategories;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to get subcategories.');
  }
}