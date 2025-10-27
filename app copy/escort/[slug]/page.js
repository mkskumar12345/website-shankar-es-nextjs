export default async function Profile({ params }) {
  const { slug } = params
  const API = process.env.NEXT_PUBLIC_API_URL
  let p = null
  try {
    const res = await fetch(`${API}/api/profiles/${slug}`, { cache: 'no-store' })
    if (res.ok) p = await res.json()
  } catch (e) {
    console.warn('Profile fetch failed', e)
  }
  if (!p) return <div>Profile not found</div>

  const images = p.images || []
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="space-y-3">
            {images.map(img => (
              <img key={img} src={`${process.env.NEXT_PUBLIC_API_URL}/images/${img}`} className="w-full rounded" alt={p.name} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            {p.name} {p.verified && <span className="text-sm bg-green-100 px-2 rounded">Verified</span>}
          </h1>
          <p className="text-sm mt-2">{p.age} • {p.area}</p>
          <p className="mt-4">{p.bio}</p>

          <div className="mt-6 space-y-2">
            <a href={`tel:${p.phone}`} className="block py-2 text-center border rounded">Call Now</a>
            <a href={`https://wa.me/${(p.phone || '').replace(/\D/g,'')}`} className="block py-2 text-center border rounded">Message on WhatsApp</a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-gray-500">18+ only. Professional companionship. No explicit content.</p>
    </div>
  )
}
