import Navbar from "../../components/Navbar";

export default function OwnersPage() {
  return (
    <div className="grid" style={{ gap: 22 }}>
      <Navbar />

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Owner Services</h2>
        <p className="muted">
          Full-service vacation rental management for Tampa Bay property owners.
          We handle marketing, guests, and operations so you can earn income
          without the stress.
        </p>

        <div className="grid grid-3" style={{ gap: 12, marginTop: 12 }}>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>Listing Optimization</h4>
            <p className="muted small">
              Professional listing setup, photography guidance, and SEO-optimized
              descriptions to increase visibility and bookings.
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Dynamic Pricing</h4>
            <p className="muted small">
              Nightly pricing adjusted daily based on seasonality,
              local events, and demand trends.
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Guest Communication</h4>
            <p className="muted small">
              24/7 guest messaging, booking management,
              check-in instructions, and issue resolution.
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Cleaning Coordination</h4>
            <p className="muted small">
              Professional cleaning teams scheduled automatically
              between bookings with quality checks.
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Maintenance Coordination</h4>
            <p className="muted small">
              Fast response for repairs and preventative maintenance
              using trusted local vendors.
            </p>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Owner Reporting</h4>
            <p className="muted small">
              Monthly performance reports, revenue tracking,
              and operational transparency.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <h3>Management Pricing</h3>

          <div className="grid grid-2" style={{ gap: 12 }}>
            <div className="card">
              <h4>Short-Term Rental Management</h4>
              <p className="muted small">
                Full service management for vacation rentals.
              </p>
              <strong>20% of revenue</strong>
              <div className="muted small">
                Cleaning & maintenance billed separately
              </div>
            </div>

            <div className="card">
              <h4>Mid-Term Rental Management</h4>
              <p className="muted small">
                30+ day stays (travel nurses, corporate, relocation).
              </p>
              <strong>10% of revenue</strong>
              <div className="muted small">
                Cleaning & maintenance billed separately
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <a className="btn btn-primary" href="/revenue-estimate">
            Get Free Revenue Estimate
          </a>
        </div>
      </section>
    </div>
  );
}
