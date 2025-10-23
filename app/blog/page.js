// app/blog/page.tsx
import Link from 'next/link';

// interface Post {
//   slug: string;
//   title: string;
//   date: string;
//   excerpt: string;
// }

export default async function BlogListingPage() {
  const API = process.env.NEXT_PUBLIC_API_URL;
//   let posts: Post[] = [];
  let posts = [];

  try {
    // const res = await fetch(`${API}/api/posts?city=${process.env.NEXT_PUBLIC_CITY_SLUG}&limit=10`, { cache: 'no-store' });
    const res = await fetch(`${API}/api/posts`, { cache: 'no-store' });
    if (res.ok) {
      posts = await res.json();
    }
  } catch (err) {
    console.warn('Blog posts fetch failed:', err);
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      {posts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block border rounded hover:shadow p-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p>{post.excerpt}</p>
              <span className="text-amber-500 mt-2 inline-block">Read more →</span>
            </Link>
          ))}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
    </main>
  );
}
