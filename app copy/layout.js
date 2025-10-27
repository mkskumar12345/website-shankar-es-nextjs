import './globals.css'
import '../public/css/bootstrap.min.css'; // from public folder
import '../public/css/style.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import AgeGateClient from '../components/AgeGateClient';
import CookieConsentClient from '../components/CookieConsentModal'

export const metadata = { title: 'Jaipur Escorts', description: 'Verified companions in Jaipur' }

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        <AgeGateClient>
          {/* render CookieConsent once age gate accepted */}
          <CookieConsentClient />
          {children}
        </AgeGateClient>
        <Footer />
      </body>
    </html>
  )
}
