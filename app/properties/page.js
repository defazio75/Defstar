import Navbar from "../../components/Navbar";

export default function PropertiesPage() {
  return (
    <div className="grid" style={{ gap: 22 }}>
      <Navbar />

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Vacation Rentals</h2>
        <p className="muted">
          Browse our featured vacation rentals across Tampa Bay and St. Petersburg.
          For availability or direct bookings, contact us directly.
        </p>

        <div className="grid grid-3" style={{ gap: 12, marginTop: 12 }}>
          <div className="card">
            <h4>St Pete Beach Condo</h4>
            <p className="muted small">
              2 Bed • 2 Bath • Sleeps 6
            </p>
            <a className="btn btn-ghost" href="/contact">
              Check Availability
            </a>
          </div>

          <div className="card">
            <h4>Treasure Island Beach House</h4>
            <p className="muted small">
              3 Bed • Sleeps 8
            </p>
            <a className="btn btn-ghost" href="/contact">
              Check Availability
            </a>
          </div>

          <div className="card">
            <h4>Downtown St Pete Apartment</h4>
            <p className="muted small">
              1 Bed • Sleeps 4
            </p>
            <a className="btn btn-ghost" href="/contact">
              Check Availability
            </a>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <a className="btn btn-primary" href="/contact">
            Contact for Reservations
          </a>
        </div>
      </section>
    </div>
  );
}
