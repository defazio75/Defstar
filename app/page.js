// app/page.js
import Navbar from "../components/Navbar";
import FeaturedProperties from "../components/FeaturedProperties";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: 22 }}>
      <Navbar />

      {/* HERO */}
      <section className="hero card" aria-label="hero">
        <div className="left">
          <div className="muted small" style={{ marginBottom: 10 }}>
            Short-Term Rental & Mid-Term Rental Management
          </div>

          <h2 style={{ marginTop: 0 }}>
            Hospitality-first management for Tampa Bay hosts
          </h2>

          <p className="muted">
            We maximize revenue and protect your asset with guest-first service, dynamic pricing,
            and reliable local operations. Book direct or request a free owner revenue estimate.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="/revenue-estimate">
              Get Free Revenue Estimate
            </a>
            <a className="btn btn-ghost" href="/properties">
              View Properties
            </a>
            <a
              className="btn"
              href="/owners"
              style={{ border: "1px solid rgba(15,23,32,0.06)" }}
            >
              Owner Services
            </a>
          </div>

          <div style={{ marginTop: 18 }} className="muted small">
            <strong>Local team • Guest-first • 24/7 messaging</strong>
          </div>
        </div>

        <div className="image">
          <img
            src="/images/hero-warm.jpg"
            alt="Cozy rental interior"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="card" aria-label="featured properties">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
          <h3 className="section-title" style={{ margin: 0 }}>Featured Properties</h3>
          <a className="btn btn-ghost" href="/properties">View all →</a>
        </div>

        <div style={{ marginTop: 12 }}>
          <FeaturedProperties />
        </div>
      </section>

      {/* SERVICES + PRICING */}
      <section className="card" aria-label="services">
        <h3 className="section-title">Full-Service Management</h3>

        <div className="grid grid-3">
          <div className="card">
            <h4 style={{ marginTop: 0 }}>STR Management</h4>
            <p className="muted small">
              For 1–30 night stays: listing optimization, pricing, guest comms, cleaning coordination,
              inspections, and maintenance coordination.
            </p>
            <div className="muted small">
              <strong>20% of revenue</strong>
              <div>Cleaning & maintenance billed separately</div>
            </div>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Mid-Term Management</h4>
            <p className="muted small">
              For 30+ day stays: marketing, leasing support, tenant communication,
              cleaning coordination, and maintenance coordination.
            </p>
            <div className="muted small">
              <strong>10% of revenue</strong>
              <div>Cleaning & maintenance billed separately</div>
            </div>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Owner-First Reporting</h4>
            <p className="muted small">
              Clear statements, itemized expenses, and strategy updates focused on revenue,
              reviews, and long-term asset care.
            </p>
            <a className="btn btn-ghost" href="/owners">See how it works →</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="card" aria-label="how it works">
        <h3 className="section-title">How It Works</h3>

        <div className="grid grid-3">
          <div className="card">
            <h4 style={{ marginTop: 0 }}>1) Setup & Strategy</h4>
            <p className="muted small">
              We review your property, recommend upgrades, and build a pricing + positioning plan.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>2) Launch & Operate</h4>
            <p className="muted small">
              We manage listings, messaging, turnovers, and issue resolution with local partners.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>3) Optimize Monthly</h4>
            <p className="muted small">
              We track revenue and reviews, adjust pricing, and keep the home guest-ready.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className="card" aria-label="trust points">
        <h3 className="section-title">Why owners choose DefStar</h3>

        <div className="grid grid-3">
          <div className="card">
            <h4 style={{ marginTop: 0 }}>Transparent fees</h4>
            <p className="muted small">
              No hidden costs. Cleaning & maintenance billed separately and fully itemized.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>Local operations</h4>
            <p className="muted small">
              We live and work in Tampa Bay — quick turnarounds, trusted contractors, and walkthroughs.
            </p>
          </div>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>Guest-first support</h4>
            <p className="muted small">
              Rapid response, professional hospitality standards, and review-focused service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA (your existing component) */}
      <CTA />
    </div>
  );
}
<Footer />
