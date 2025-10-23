import Link from 'next/link'
export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">Jaipur Escorts</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/jaipur">Jaipur</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}