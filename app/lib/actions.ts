'use server';

import { prisma } from './data';
import { revalidatePath } from 'next/cache';
import { routes } from './route-list';

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

export async function getExistingUser(email: string) {
  const existingUser = await prisma.user.findFirst({
    where: { email },
    include: { Favorite: true },
  });

  if (!existingUser) {
    throw new Error('User not found');
  }

  return existingUser;
}

export async function checkFavorite(productId: string, email: string) {
  const existingUser = await getExistingUser(email);
  // console.log(existingUser);

  const isFavorite = existingUser.Favorite.some(
    (favorite) => favorite.productId === productId,
  );

  // console.log(existingFavorite);

  return isFavorite;
}

export async function toggleFavorite(
  productId: string,
  email: string,
  userClerkId: string,
) {
  try {
    // Check if user exists
    const existingUser = await getExistingUser(email);

    const existingFavorite = existingUser.Favorite.find(
      (favorite) => favorite.productId === productId,
    );

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: { id: existingFavorite.id },
      });
      console.log(`Removed from favorites ${existingFavorite.id}`);
    } else {
      await prisma.favorite.create({
        data: {
          userId: existingUser.id,
          productId: productId,
          userClerkId,
        },
      });
      console.log(`Added to favorites ${productId}`);
      revalidatePath(routes.favorites);
    }
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to toggle favorite.');
  }
}
