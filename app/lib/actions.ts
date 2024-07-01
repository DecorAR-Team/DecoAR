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

    // Check if product already exists in favorites
    const isFavorite = existingUser.favoriteProducts.some(
      (favProduct) => favProduct.id === productId
    );

    const updateData = {
      favoriteProducts: {
        connect: isFavorite ? undefined : { id: productId }, // Connect if not favorite, disconnect if favorite
        disconnect: isFavorite ? { id: productId } : undefined,
      },
    };

    // Update user with favorite product changes
    await prisma.user.update({
      where: { email },
      data: updateData,
    });

    // Return message based on favorite status (remove function logic)
    return {
      message: isFavorite ? 'Product removed from favorites' : 'Product added to favorites',
    };
  } catch (error) {
    console.error(error);
    // Handle specific errors (user not found)
    if (error.message === 'User not found') {
      return { message: 'User not found' };
    } else {
      return { message: 'Internal server error' };
    }
  }
}
