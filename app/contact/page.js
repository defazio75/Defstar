import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <div className="grid" style={{ gap: 22 }}>
      <Navbar />

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Contact</h2>
        <p className="muted">
          Questions about management, direct bookings, or availability? Reach out anytime.
        </p>

        <div className="grid grid-3" style={{ gap: 12, marginTop: 12 }}>
          <div className="card">
            <h4 style={{ marginTop: 0 }}>Call / Text</h4>
            <p className="muted small">Fastest response for bookings and urgent issues.</p>
            <a className="btn btn-primary" href="tel:+15555555555">
              Call Now
            </a>
            <div className="muted small" style={{ marginTop: 8 }}>
              Update this number in the code.
            </div>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Email</h4>
            <p className="muted small">Owner inquiries + revenue estimates.</p>
            <a className="btn" style={{ border: "1px solid rgba(15,23,32,0.10)" }} href="mailto:info@defstarmanagement.com">
              info@defstarmanagement.com
            </a>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Service Area</h4>
            <p className="muted small">
              Tampa • St. Petersburg • Treasure Island • St Pete Beach • Madeira Beach
            </p>
            <a className="btn btn-ghost" href="/revenue-estimate">
              Get Free Revenue Estimate →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
