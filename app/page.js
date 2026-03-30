import Link from "next/link";
import FeaturedProperties from "../components/FeaturedProperties";
import CTA from "../components/CTA";

const services = [
  {
    icon: "✦",
    title: "STR Management",
    copy:
      "Listing setup, pricing, guest messaging, cleaning coordination, inspections, and full day-to-day hospitality operations.",
  },
  {
    icon: "◷",
    title: "Mid-Term Rentals",
    copy:
      "30+ day rental management for relocation, corporate, seasonal, and travel professional demand across Tampa Bay.",
  },
  {
    icon: "✓",
    title: "Owner Reporting",
    copy:
      "Clear monthly reporting focused on revenue, occupancy, reviews, expenses, and what we are doing next to improve performance.",
  },
];

const reasons = [
  "Sharper online presentation that feels premium instead of generic",
  "Guest-first communication that helps protect ratings and reviews",
  "Local operational execution with faster, cleaner coordination",
  "Transparent owner updates and clearly itemized expenses",
];

const process = [
  {
    title: "1. Review + position",
    copy: "We assess the home, recommend improvements, and outline how to position it for stronger demand.",
  },
  {
    title: "2. Launch + manage",
    copy: "We handle listings, guest communication, turnovers, maintenance coordination, and everyday issue resolution.",
  },
  {
    title: "3. Refine monthly",
    copy: "We adjust pricing, review performance, watch guest feedback, and keep the property looking sharp.",
  },
];

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-shell">
        <div className="card card-dark hero-copy">
          <div
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#eef8fb",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            Tampa Bay STR & Mid-Term Management
          </div>

          <div>
            <h2 className="hero-title">
              Coastal hospitality management with a <span>premium feel.</span>
            </h2>

            <p className="lead" style={{ marginTop: 18, maxWidth: 680 }}>
              DefStar Management helps owners present better, operate smoother,
              and maximize revenue across Tampa Bay, St. Petersburg, and the Gulf Beaches.
            </p>
          </div>

          <div className="btn-row">
            <Link href="/revenue-estimate" className="btn btn-gold">
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
              <span className="small muted">Clearer operations and reporting</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <img src="/images/oceanpic.jpg" alt="Oceanfront balcony view in Tampa Bay" />

          <div className="hero-floating">
            <div className="small muted" style={{ marginBottom: 8 }}>
              A better first impression changes everything
            </div>
            <h3 style={{ margin: 0, fontSize: "1.3rem", letterSpacing: "-0.03em" }}>
              Premium presentation attracts better bookings, stronger trust, and a more valuable brand.
            </h3>
          </div>
        </div>
      </section>

      <section className="split-feature">
        <div className="card feature-image-card">
          <img src="/images/oceanpic.jpg" alt="Ocean view balcony at a professionally managed rental" />
        </div>

        <div className="card feature-copy">
          <div className="eyebrow">Designed to feel elevated</div>
          <h2 className="section-title">
            Your property should look like an asset, not just another listing.
          </h2>
          <p className="section-copy">
            Stronger visuals, more polished presentation, cleaner communication, and tighter operations
            all work together to improve trust, conversion, and long-term owner confidence.
          </p>

          <div className="check-list">
            {reasons.map((reason) => (
              <div key={reason} className="check-row">
                <div className="check-badge">✓</div>
                <div>
                  <strong>{reason}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">
              Talk With DefStar
            </Link>
            <Link href="/revenue-estimate" className="btn btn-secondary">
              Request Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "end", flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow">Featured rentals</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              A more premium guest-facing presentation.
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
            Built to make ownership feel cleaner and easier.
          </h2>
          <p className="section-copy" style={{ marginTop: 12 }}>
            We keep the presentation elevated, the communication responsive, and the operations organized.
          </p>
        </div>

        <div className="grid grid-3">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <div className="icon-badge">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="lead">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card card-dark">
        <div>
          <div
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#eef8fb",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            How it works
          </div>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            A simple process with a more polished result.
          </h2>
        </div>

        <div className="grid grid-3" style={{ marginTop: 24 }}>
          {process.map((step, index) => (
            <article
              key={step.title}
              style={{
                borderRadius: 22,
                padding: 22,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              className="process-card"
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 16,
                  background: "rgba(255,255,255,0.14)",
                  fontWeight: 800,
                }}
              >
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
