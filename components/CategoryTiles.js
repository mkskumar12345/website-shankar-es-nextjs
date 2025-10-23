import Link from 'next/link'

export default function CategoryTiles({ categories }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map(c => (
        <Link key={c.slug} href={`/jaipur/${c.slug}`} className="p-4 border rounded text-center">
          <div className="font-semibold">{c.label}</div>
          <div className="text-xs text-gray-500">{c.tagline}</div>
        </Link>
      ))}
    </div>
  )
}
