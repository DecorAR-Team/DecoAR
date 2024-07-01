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


export async function toggleFavorite(productId: string, email: string) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      throw new Error('User not found'); // Handle non-existent user
    }


} catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to toggle favorite.');
  }
}
