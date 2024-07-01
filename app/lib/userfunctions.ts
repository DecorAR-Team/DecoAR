import { prisma } from './data';

export async function createOrUpdateUser(email: string, name: string) {
  // Check if user already exists in your database
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    // User exists, update if necessary
    return prisma.user.update({
      where: { email },
      data: { name },
    });
  } else {
    // User doesn't exist, create a new user
    return prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }
}
