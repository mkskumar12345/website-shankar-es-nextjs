import ProfileCard from "../../../../components/ProfileCard"

export default async function CategoryPage({ params }) {
  const { category } = params
  // const API = process.env.NEXT_PUBLIC_API_URL
  // let profiles = []
  // try {
  //   const res = await fetch(`${API}/api/profiles?city=${process.env.NEXT_PUBLIC_CITY_SLUG}&category=${category}&limit=50`, { cache: 'no-store' })
  //   if (res.ok) profiles = await res.json()
  // } catch (e) {
  //   console.warn('Category fetch failed', e)
  // }

  return (
    <div>
      <h1 className="text-2xl font-bold">{category.replace('-', ' ')} in Jaipur</h1>
      <p className="mt-2 text-gray-600">Short 150-word intro about {category.replace('-', ' ')} in Jaipur.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {profiles.length ? profiles.map(p => <ProfileCard key={p.id} p={p} />) : <div>No profiles found.</div>}
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">SEO Section</h2>
        <p className="text-sm mt-2">(600–1000 words SEO content placeholder.)</p>
      </section>
    </div>
  )
}
