import Link from "next/link";
import CTA from "../components/CTA";

const services = [
  {
    icon: "✦",
    title: "STR Management",
    copy:
      "Full-service Airbnb management including listing setup, pricing, guest messaging, cleaning coordination, and day-to-day operations.",
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
      "Clear monthly updates focused on revenue, occupancy, reviews, expenses, and next steps to improve performance.",
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
              Maximize Your Airbnb Revenue in <span>Tampa Bay</span>
            </h2>

            <p className="lead" style={{ marginTop: 18, maxWidth: 680 }}>
              We handle pricing, guests, cleaning, and operations — so your
              property earns more with less effort.
            </p>
          </div>

          <div className="btn-row">
            <Link href="/revenue-estimate" className="btn btn-gold">
              Get Free Revenue Estimate
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
              <span className="small muted">
                Clearer operations and reporting
              </span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <img
            src="/images/oceanpic.jpg"
            alt="Oceanfront balcony view in Tampa Bay"
          />

          <div className="hero-floating">
            <div className="small muted" style={{ marginBottom: 8 }}>
              A better first impression changes everything
            </div>
            <h3
              style={{
                margin: 0,
                fontSize: "1.3rem",
                letterSpacing: "-0.03em",
              }}
            >
              Premium presentation attracts better bookings, stronger trust, and
              a more valuable rental brand.
            </h3>
          </div>
        </div>
      </section>

      <section className="section">
        <div>
          <div className="eyebrow">Management services</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            Full-Service Airbnb Management
          </h2>
          <p className="section-copy" style={{ marginTop: 12 }}>
            DefStar Management helps owners increase revenue, protect reviews,
            and simplify the day-to-day work of operating a short-term or
            mid-term rental.
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

      <CTA />
    </div>
  );
}
