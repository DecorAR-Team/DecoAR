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

export async function fetchSubcategoryWithProductIds() {
  try {
    const subcategorieswithproductIds = await prisma.subcategoryWithProductIds.findMany();
    return subcategorieswithproductIds;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchSubCategoryProducts() { 
 try {
  
  
 } catch (error) {
  console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
 } 
}