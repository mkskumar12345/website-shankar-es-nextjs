export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-6xl mx-auto p-6 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Jaipur Escorts. 18+ Verified Companions Only. No Explicit Content.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/report-abuse">Report Abuse</a>
        </div>
      </div>
    </footer>
  )
}