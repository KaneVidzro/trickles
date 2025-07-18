// app/page.tsx
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      topic: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <main className="max-w-2xl mx-auto py-6">
      <h1 className="text-xl font-semibold mb-4">Your Feed</h1>
      {posts.map(post => (
        <div key={post.id} className="border-b pb-4 mb-4">
          <Link href={`/topics/${post.topic.id}`}>
            <p className="text-sm text-gray-500">{post.topic.name}</p>
          </Link>
          <Link href={`/user/${post.author.id}`}>
            <h2 className="font-medium">{post.author.name}</h2>
          </Link>
          <Link href={`post/${post.id}`}>
            <p>{post.content}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}
