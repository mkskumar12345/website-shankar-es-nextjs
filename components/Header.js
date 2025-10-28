import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="main-header d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo-img">
              <Link href="/">
                <img src="/img/logo.svg" alt="logo" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="nav justify-content-center">
              <ul className="p-0 m-0 align-items-center d-flex">
                <li>
                  <Link className="nav-links" href="/">Home</Link>
                </li>
                <li>
                  <Link className="nav-links" href="/categories">Categories</Link>
                </li>
                <li>
                  <Link className="nav-links" href="/areas">Areas</Link>
                </li>
                <li>
                  <Link className="nav-links" href="/blog">Blog</Link>
                </li>
                <li>
                  <Link className="nav-links" href="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Post Your ADS Button */}
            <div className="post-add-btn">
              <Link className="common-btn btn primary-btn" href="/post-your-ads">
                Post Your ADS
              </Link>
            </div>

            {/* Mobile nav button */}
            <button type="button" id="navbtn"></button>
          </div>
        </div>
      </div>
    </header>
  );
}