// components/Navbar.js
export default function Navbar() {
  return (
    <header className="card" aria-label="site header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "6px 2px",
        }}
      >
        {/* Brand */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background: "rgba(15,23,32,0.06)",
              display: "grid",
              placeItems: "center",
              fontWeight: 800,
            }}
          >
            ★
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800 }}>DefStar Management</div>
            <div className="muted small">Tampa • St Pete • Gulf Beaches</div>
          </div>
        </a>

        {/* Nav */}
        <nav aria-label="primary navigation" style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <a className="btn btn-ghost" href="/properties">Properties</a>
          <a className="btn btn-ghost" href="/owners">Owner Services</a>
          <a className="btn btn-ghost" href="/about">About</a>
          <a className="btn btn-ghost" href="/contact">Contact</a>

          <a className="btn" href="/revenue-estimate" style={{ border: "1px solid rgba(15,23,32,0.10)" }}>
            Free Revenue Estimate
          </a>
          <a className="btn btn-primary" href="tel:+15555555555">Call</a>
        </nav>
      </div>
    </header>
  );
}
