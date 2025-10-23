// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

// interface Post {
//   slug: string;
//   title: string;
//   date: string;
//   content: string;
// }

// interface Params {
//   slug: string;
// }

export async function generateStaticParams() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API}/api/posts?city=${process.env.NEXT_PUBLIC_CITY_SLUG}`, { cache: 'no-store' });
  const posts = res.ok ? await res.json() : [];
  return posts.map(post => ({
    slug: post.slug,
  }));
}
// correct next list
export default async function BlogPostPage({ params }) {
// export default async function BlogPostPage({ params }: { params }) {
  const { slug } = params;
  const API = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API}/api/posts/${slug}?city=${process.env.NEXT_PUBLIC_CITY_SLUG}`, { cache: 'no-store' });

  if (!res.ok) {
    return notFound();
  }

  const post = await res.json();

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{new Date(post.date).toLocaleDateString()}</p>
      <div className="prose max-w-none">
        {/* You can dangerouslySetInnerHTML if content is HTML or render MDX */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  );
}
