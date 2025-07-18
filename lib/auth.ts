import { getSession } from '@/lib/session';
import { prisma } from '@/lib/prisma';

export async function getUser() {
  const session = await getSession();
  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      comments: true,
      posts: true,
      reactions: true,
      notifications: true,
    },
  });

  return user;
}
