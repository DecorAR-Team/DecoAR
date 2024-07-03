import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from './data';

export async function getUserInfo() {
  const user = await currentUser();
  // const authObj = auth();

  if (!user) {
    return null;
  }

  return {
    email: user.emailAddresses[0].emailAddress,
    name: user.fullName || user.firstName || '',
    image: user.imageUrl,
    clerkId: user.id,
  };
}

export async function createOrUpdateUser(
  email: string,
  name: string,
  image: string,
  clerkId: string,
) {
  // Check if user already exists in your database
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    // User exists, update if necessary
    return prisma.user.update({
      where: { email },
      data: { name, avatar: image },
    });
  } else {
    // User doesn't exist, create a new user
    return prisma.user.create({
      data: {
        email,
        name,
        avatar: image,
        clerkId: clerkId,
      },
    });
  }
}
