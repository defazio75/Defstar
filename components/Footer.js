import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="card footer-card">
          <div className="footer-grid">
            <div>
              <div className="eyebrow">DefStar Management</div>
              <h3 className="section-title" style={{ marginTop: 18, fontSize: "2rem" }}>
                Boutique-feel rental management for serious owners.
              </h3>
              <p className="section-copy" style={{ marginTop: 14 }}>
                Short-term and mid-term rental management for Tampa Bay owners who want
                stronger presentation, smoother operations, and a better guest experience.
              </p>
            </div>

            <div>
              <h4 style={{ marginTop: 0, marginBottom: 14 }}>Quick Links</h4>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/properties">Properties</Link>
                <Link href="/owners">Owner Services</Link>
                <Link href="/revenue-estimate">Revenue Estimate</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h4 style={{ marginTop: 0, marginBottom: 14 }}>Contact</h4>
              <div className="footer-links">
                <span>Tampa • St. Petersburg • Beaches</span>
                <a href="tel:+15555555555">Call / Text: (555) 555-5555</a>
                <a href="mailto:info@defstarmanagement.com">info@defstarmanagement.com</a>
              </div>

              <div className="btn-row" style={{ marginTop: 18 }}>
                <Link href="/revenue-estimate" className="btn btn-primary">
                  Get Free Revenue Estimate
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} DefStar Management</div>
            <div>Hospitality-first vacation rental management in Tampa Bay</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
