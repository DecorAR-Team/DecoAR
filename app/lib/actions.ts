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

export default async function addToFavourite() {
  const { userId, productId } = req.body;
  try {
    const user = await prisma.User.create({
      where: {
        id: userId,
      },
      data: {
        favoritedProducts: [],
      },
    });
    res.status(201).send('favorite added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

