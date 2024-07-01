'use server';

import { message } from 'antd';
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

export async function toggleFavorite(
  productId: string,
  email: string,
  userClerkId: string,
) {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: { email },
      include: { Favorite: true },
    });

    if (!existingUser) {
      throw new Error('User not found');
    }

    const existingFavorite = existingUser.Favorite.find(
      (favorite) => favorite.productId === productId,
    );

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: { id: existingFavorite.id },
      });
      return { message: `Removed from favorites ${existingFavorite.id}` };
    } else {
      await prisma.favorite.create({
        data: {
          userId: existingUser.id,
          productId: productId,
          userClerkId,
        },
      });
      return { message: `Added to favorites ${productId}` };
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to toggle favorite.');
  }
}
