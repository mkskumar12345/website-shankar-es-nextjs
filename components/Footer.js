export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-row">
          <div className="col-md-6 col-lg-3 footer-col">
            <div className="footer-about h-100">
              <div className="footer-content">
                <h5 className="footer-logo-title">
                  ESJ - Escort Service Jaipur (Directory)
                </h5>
                <p className="footer-logo-text">
                  Privacy first classifieds platform. Jaipur, Rajasthan
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 footer-col">
            <div className="footer-contact h-100">
              <h6 className="footer-widget fw-600">Contact</h6>
              <div className="footer-email common-contact d-flex align-items-center flex-wrap">
                <i className="fa-solid fa-envelope"></i>
                <a href="#">hello@esj.in</a>
              </div>
              <div className="footer-whatsapp common-contact d-flex align-items-center flex-wrap">
                <i className="fa-brands fa-whatsapp"></i>
                <a href="#">+91XXXXXXXXXX</a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3 footer-col">
            <div className="footer-links h-100">
              <h6 className="footer-widget fw-600">Quick Links</h6>
              <ul className="p-0 m-0 d-flex flex-column">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Area</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3 footer-col">
            <div className="footer-links h-100">
              <h6 className="footer-widget fw-600">Legal</h6>
              <ul className="p-0 m-0 d-flex flex-column">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms-and-conditions">Terms of Use</a>
                </li>
                <li>
                  <a href="cookie-policy">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 footer-col">
            <div className="footer-support h-100">
              <h6 className="footer-widget fw-600">Safety & Support</h6>
              <ul className="support-list p-0 m-0">
                <li>
                  <a href="#">Report Ad</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Safety Tips</a>
                </li>
              </ul>
              <div className="more-btn text-end">
                <a className="help-link" href="#">
                  Help
                </a>
                <a className="report-link" href="#">
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content text-center">
                <p className="copyright-text mb-2">
                  © 2025 ESJ.in - Classified listings only. Mo facilitation. All Rights reserved. Jaipur, Rajasthan
                </p>
                <p className="disclaimer-text m-0">
                  <strong>Disclaimer :-</strong> 18+ Verified Companions Only. No Explicit Content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
