import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <div className="grid" style={{ gap: 22 }}>
      <Navbar />

      <section className="card">
        <h2 style={{ marginTop: 0 }}>About DefStar Management</h2>
        <p className="muted">
          DefStar is a Tampa Bay vacation rental management company built around one idea:
          <strong> treat every stay like hospitality</strong> — and protect the asset like an owner.
        </p>

        <div className="grid grid-3" style={{ gap: 12, marginTop: 12 }}>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>Hospitality-first</h4>
            <p className="muted small">
              Guest experience drives reviews, reviews drive ranking, ranking drives revenue. We
              prioritize response time, clarity, and smooth stays.
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Revenue-focused</h4>
            <p className="muted small">
              Dynamic pricing, listing optimization, and positioning by neighborhood — not “set it
              and forget it.”
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Local operations</h4>
            <p className="muted small">
              Reliable turnovers, inspections, and maintenance coordination with trusted local
              partners in Tampa Bay.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <h3 style={{ marginTop: 0 }}>What we manage</h3>
          <ul className="muted" style={{ marginTop: 6 }}>
            <li>Short-term rentals (1–30 nights)</li>
            <li>Mid-term rentals (30+ nights: corporate, travel nurse, relocation)</li>
            <li>Owner messaging, reporting, and property care</li>
          </ul>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
            <a className="btn btn-primary" href="/revenue-estimate">
              Free Revenue Estimate
            </a>
            <a className="btn btn-ghost" href="/owners">
              Owner Services
            </a>
            <a className="btn" style={{ border: "1px solid rgba(15,23,32,0.10)" }} href="/properties">
              View Properties
            </a>
          </div>
        </div>

        <div className="muted small" style={{ marginTop: 12 }}>
          Want this page to sound more “luxury” like that reference site, or more “local + hands-on”?
          Either is fine — we can tune tone once your first few listings are live.
        </div>
      </section>
    </div>
  );
}
