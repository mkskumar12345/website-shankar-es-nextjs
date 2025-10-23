import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = { title: 'Jaipur Escorts', description: 'Verified companions in Jaipur' }

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Header />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
