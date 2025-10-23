// import ProfileCard from '../components/ProfileCard'

// const featuredProfiles = [
//   {slug:'aisha-jaipur', name:'Aisha', age:24, area:'Vaishali Nagar', phone:'+911234567890', image:'/images/aisha1.jpg'},
//   {slug:'neha-jaipur', name:'Neha', age:27, area:'Malviya Nagar', phone:'+919876543210', image:'/images/neha1.jpg'}
// ]

// export default function Home(){
//   return (
//     <>
//       <section className="mb-8">
//         <div className="bg-[url('/images/jaipur-hero.jpg')] bg-cover bg-center rounded h-64 flex items-center">
//           <div className="bg-black/40 p-6 rounded ml-6">
//             <h1 className="text-white text-3xl font-bold">Jaipur Escorts – Verified & Professional Companions</h1>
//             <p className="text-white mt-2">Find professional companions in Jaipur — discreet & verified.</p>
//             <a href="/jaipur" className="mt-4 inline-block bg-amber-500 text-black py-2 px-4 rounded">Explore Escorts in Jaipur</a>
//           </div>
//         </div>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Featured Profiles</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {featuredProfiles.map(p => <ProfileCard key={p.slug} p={p} />)}
//         </div>
//       </section>
//     </>
//   )
// }

import CategoryTiles from '../components/CategoryTiles'
import ProfileCard from '../components/ProfileCard'

const categories = [
  {slug:'independent-escorts', label:'Independent', tagline:'Verified Indian Escorts'},
  {slug:'vip', label:'VIP', tagline:'Luxury Companions'},
  {slug:'russian', label:'Russian', tagline:'International'},
  {slug:'agency', label:'Agency', tagline:'Agency Verified'},
  {slug:'college', label:'College', tagline:'Friendly Companions'},
  {slug:'blonde', label:'Blonde', tagline:'International Look'},
  {slug:'student', label:'Student', tagline:'Young & Fresh'},
  {slug:'part-time', label:'Part-time', tagline:'Flexible Timings'},
  {slug:'massage', label:'Massage', tagline:'Professional Massage'},
  {slug:'vip-elite', label:'VIP Elite', tagline:'Premium & Luxury'}
]

export default async function Home() {
  const API = process.env.NEXT_PUBLIC_API_URL
  let profiles = []
  try {
    const res = await fetch(`${API}/api/profiles?city=${process.env.NEXT_PUBLIC_CITY_SLUG}&verified=true&limit=8`, { cache: 'no-store' })
    if (res.ok) profiles = await res.json()
  } catch (e) {
    console.warn('Profiles fetch failed', e)
  }

  return (
    <>
      <section className="mb-8">
        <div className="bg-[url('/images/jaipur-hero.jpg')] bg-cover bg-center rounded h-64 flex items-center">
          <div className="bg-black/40 p-6 rounded ml-6">
            <h1 className="text-white text-3xl font-bold">Jaipur Escorts – Verified & Professional Companions</h1>
            <p className="text-white mt-2">Find professional companions in Jaipur — discreet & verified.</p>
            <a href="/jaipur" className="mt-4 inline-block bg-amber-500 text-black py-2 px-4 rounded">Explore Escorts in Jaipur</a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <CategoryTiles categories={categories} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {profiles.length ? profiles.map(p => <ProfileCard key={p.id} p={p} />) : <div>No featured profiles available.</div>}
        </div>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded">
        <h3 className="font-semibold">Why Choose Us</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div><strong>Verified Profiles</strong><p className="text-sm">Profiles verified by our team.</p></div>
          <div><strong>Fast Contact</strong><p className="text-sm">Direct Call/WhatsApp buttons.</p></div>
          <div><strong>Privacy</strong><p className="text-sm">We keep your data private.</p></div>
          <div><strong>24x7 Support</strong><p className="text-sm">Contact us anytime.</p></div>
        </div>
      </section>
    </>
  )
}
