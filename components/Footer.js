export default function Footer() {
  return (
    <footer
      className="card"
      style={{
        marginTop: 30,
        borderTop: "1px solid rgba(15,23,32,0.08)",
      }}
    >
      <div
        className="grid grid-3"
        style={{
          gap: 20,
          paddingTop: 10,
        }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ marginTop: 0 }}>DefStar Management</h3>

          <p className="muted small">
            Vacation rental and short-term rental management
            serving Tampa Bay and St. Petersburg.
          </p>

          <p className="muted small">
            Hospitality-focused hosting designed to maximize
            owner revenue and deliver exceptional guest stays.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ marginTop: 0 }}>Quick Links</h4>

          <div style={{ display: "grid", gap: 6 }}>
            <a href="/">Home</a>
            <a href="/properties">Vacation Rentals</a>
            <a href="/owners">Owner Services</a>
            <a href="/revenue-estimate">Free Revenue Estimate</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginTop: 0 }}>Contact</h4>

          <div className="muted small" style={{ display: "grid", gap: 6 }}>
            <div>Tampa Bay • St Petersburg • Gulf Beaches</div>

            <a href="tel:+15555555555">Call / Text</a>

            <a href="mailto:info@defstarmanagement.com">
              info@defstarmanagement.com
            </a>

            <a href="/revenue-estimate" className="btn btn-primary" style={{ marginTop: 6 }}>
              Free Revenue Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          marginTop: 20,
          paddingTop: 12,
          borderTop: "1px solid rgba(15,23,32,0.06)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
        className="muted small"
      >
        <div>© {new Date().getFullYear()} DefStar Management</div>

        <div>
          Tampa Bay Vacation Rental Management
        </div>
      </div>
    </footer>
  );
}
