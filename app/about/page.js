import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-stack">
      <section className="card">
        <div className="eyebrow">About DefStar</div>
        <h2 className="section-title" style={{ marginTop: 18 }}>
          A local management company built around presentation, hospitality, and operational discipline.
        </h2>
        <p className="lead" style={{ maxWidth: 820, marginTop: 16 }}>
          DefStar is designed for owners who want their property managed like a real hospitality asset,
          not just another listing on autopilot.
        </p>
      </section>

      <section className="grid grid-3">
        <article className="card info-card">
          <div className="icon-badge" aria-hidden="true">✦</div>
          <h3>Hospitality-first</h3>
          <p className="lead">
            Better guest communication drives better reviews, stronger trust, and a cleaner brand presence.
          </p>
        </article>

        <article className="card info-card">
          <div className="icon-badge" aria-hidden="true">↗</div>
          <h3>Revenue-minded</h3>
          <p className="lead">
            Pricing, positioning, and listing presentation are handled with a performance mindset.
          </p>
        </article>

        <article className="card info-card">
          <div className="icon-badge" aria-hidden="true">⌂</div>
          <h3>Local execution</h3>
          <p className="lead">
            Reliable turnovers, inspections, and maintenance coordination grounded in the Tampa Bay market.
          </p>
        </article>
      </section>

      <section className="highlight-grid">
        <div className="card">
          <div className="eyebrow">What we manage</div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Flexible enough for vacation stays and longer furnished demand.
          </h2>
          <div className="highlight-list" style={{ marginTop: 18 }}>
            <div className="highlight-item">
              <div className="check-badge">✓</div>
              <div>
                <strong>Short-term rentals</strong>
                <div className="small muted">
                  1–30 night stays with full-service guest and turnover coordination.
                </div>
              </div>
            </div>
            <div className="highlight-item">
              <div className="check-badge">✓</div>
              <div>
                <strong>Mid-term rentals</strong>
                <div className="small muted">
                  30+ day stays for relocation, corporate, seasonal, and travel-professional demand.
                </div>
              </div>
            </div>
            <div className="highlight-item">
              <div className="check-badge">✓</div>
              <div>
                <strong>Owner communication and reporting</strong>
                <div className="small muted">
                  Clear updates that help owners understand revenue, operations, and next actions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-dark">
          <h3 style={{ marginTop: 0, fontSize: "1.6rem" }}>The goal</h3>
          <p className="lead" style={{ marginTop: 12 }}>
            Make the property feel more premium online, more reliable operationally, and easier for the owner to hold long term.
          </p>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link href="/owners" className="btn btn-gold">
              Owner Services
            </Link>
            <Link href="/revenue-estimate" className="btn btn-secondary">
              Free Revenue Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
