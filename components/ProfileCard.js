import Link from 'next/link'

export default function ProfileCard({ p }) {
  const imgUrl = (p.images && p.images.length)
    ? `${process.env.NEXT_PUBLIC_API_URL}/images/${p.images[0]}`
    : '/images/placeholder.jpg'

  return (
    <div className="border rounded overflow-hidden">
      <img src={imgUrl} alt={p.name} className="w-full h-44 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">
          {p.name} {p.verified && <span className="text-xs ml-2 bg-green-100 text-green-700 px-2 rounded">Verified</span>}
        </h3>
        <p className="text-sm text-gray-600">{p.area} • {p.age} yrs</p>
        <div className="mt-3 flex gap-2">
          <a href={`tel:${p.phone}`} className="flex-1 text-center py-2 border rounded">Call</a>
          <a href={`https://wa.me/${(p.phone || '').replace(/\D/g,'')}`} className="flex-1 text-center py-2 border rounded">WhatsApp</a>
        </div>
        <Link href={`/escort/${p.slug}`} className="block mt-2 text-sm text-blue-600">View Profile</Link>
      </div>
    </div>
  )
}
