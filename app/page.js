import Link from "next/link";
import FeaturedProperties from "../components/FeaturedProperties";
import CTA from "../components/CTA";

const services = [
  {
    icon: "✦",
    title: "STR Management",
    copy:
      "Listing setup, dynamic pricing, guest messaging, cleaning coordination, inspections, and day-to-day issue resolution.",
    note: "20% of revenue • cleaning and maintenance billed separately",
  },
  {
    icon: "◷",
    title: "Mid-Term Management",
    copy:
      "30+ day rentals for corporate, relocation, travel nurse, and seasonal demand with polished communication and smoother turnover planning.",
    note: "10% of revenue • cleaning and maintenance billed separately",
  },
  {
    icon: "✓",
    title: "Owner Reporting",
    copy:
      "Simple monthly reporting focused on revenue, occupancy, reviews, expenses, and what we are doing next to improve performance.",
    note: "Clear, owner-friendly updates",
  },
];

const process = [
  {
    title: "1. Audit + strategy",
    copy: "We assess the home, positioning, and guest appeal, then outline upgrades, pricing direction, and launch recommendations.",
  },
  {
    title: "2. Launch + operate",
    copy: "We manage listings, messaging, turnovers, maintenance coordination, and day-to-day hospitality execution.",
  },
  {
    title: "3. Refine monthly",
    copy: "We review results, adjust pricing, watch reviews, and keep the property sharp so performance improves over time.",
  },
];

const reasons = [
  "Hospitality-first guest communication that protects reviews",
  "A sharper brand presentation instead of a generic management feel",
  "Transparent owner reporting and clearly itemized expenses",
  "Local market focus across Tampa Bay, St. Pete, and the beaches",
];

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero card">
        <div className="hero-copy">
          <div className="eyebrow">Tampa Bay STR & Mid-Term Management</div>

          <div>
            <h2 className="hero-title">
              Professional rental management with a <span>boutique hospitality feel.</span>
            </h2>
            <p className="lead" style={{ maxWidth: 720, margin: "18px 0 0" }}>
              DefStar Management helps owners present better, operate smoother, and maximize revenue
              across Tampa Bay, St. Petersburg, and the Gulf Beaches.
            </p>
          </div>

          <div className="btn-row">
            <Link href="/revenue-estimate" className="btn btn-primary">
              Get Free Revenue Estimate
            </Link>
            <Link href="/owners" className="btn btn-secondary">
              Explore Owner Services
            </Link>
            <Link href="/properties" className="btn btn-ghost">
              View Properties
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-chip">
              <strong>24/7</strong>
              <span className="small muted">Guest communication coverage</span>
            </div>
            <div className="stat-chip">
              <strong>Local</strong>
              <span className="small muted">Tampa Bay market knowledge</span>
            </div>
            <div className="stat-chip">
              <strong>Owner-first</strong>
              <span className="small muted">Clear reporting and cleaner operations</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/images/hero-warm.jpg" alt="Beautifully designed vacation rental interior" />

          <div className="hero-floating-card">
            <p className="small muted" style={{ marginBottom: 8 }}>
              Designed for owners who want more than just basic management
            </p>
            <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>
              Sharper presentation. Better guest experience. Stronger revenue potential.
            </h3>
            <p className="small muted">Local execution with a polished, upscale look and feel.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Featured rentals</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              A cleaner, more premium guest presentation.
            </h2>
          </div>
          <Link href="/properties" className="btn btn-secondary">
            View all properties
          </Link>
        </div>
        <FeaturedProperties />
      </section>

      <section className="section">
        <div>
          <div className="eyebrow">Management services</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            Built to make ownership feel simple.
          </h2>
          <p className="section-copy" style={{ marginTop: 12 }}>
            We keep the presentation elevated, the communication responsive, and the operations organized.
          </p>
        </div>

        <div className="grid grid-3">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <div className="icon-badge" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="lead">{service.copy}</p>
              <p className="small kicker" style={{ marginTop: 16 }}>
                {service.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="highlight-grid">
        <div className="card card-dark">
          <div
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#eef7fb",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            Why owners choose us
          </div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            We blend polished brand presentation with hands-on local execution.
          </h2>
          <p className="section-copy" style={{ marginTop: 14 }}>
            That combination helps owners stand out online while keeping the day-to-day operation dependable.
          </p>
        </div>

        <div className="card">
          <div className="highlight-list">
            {reasons.map((reason) => (
              <div key={reason} className="highlight-item">
                <div className="check-badge">✓</div>
                <div>
                  <strong>{reason}</strong>
                  <div className="small muted">
                    Structured, polished, and aligned with stronger guest trust.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div>
          <div className="eyebrow">How it works</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            A simple process with a premium feel.
          </h2>
        </div>

        <div className="grid grid-3">
          {process.map((step, index) => (
            <article key={step.title} className="card process-card">
              <div className="icon-badge" aria-hidden="true">
                0{index + 1}
              </div>
              <h3>{step.title}</h3>
              <p className="lead">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
