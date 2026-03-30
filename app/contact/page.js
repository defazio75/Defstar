export default function ContactPage() {
  return (
    <div className="page-stack">
      <section className="card">
        <div className="eyebrow">Contact DefStar</div>
        <h2 className="section-title" style={{ marginTop: 18 }}>
          Questions about management, bookings, or owner fit?
        </h2>
        <p className="section-copy" style={{ marginTop: 14 }}>
          Reach out anytime. Owners, guests, and booking inquiries are all welcome.
        </p>
      </section>

      <section className="grid grid-3">
        <article className="card contact-card">
          <div className="icon-badge" aria-hidden="true">☎</div>
          <h3>Call / Text</h3>
          <p className="lead">
            Fastest option for direct bookings, management questions, and urgent issues.
          </p>
          <div className="btn-row" style={{ marginTop: 18 }}>
            <a className="btn btn-primary" href="tel:+15555555555">Call Now</a>
          </div>
          <p className="small muted" style={{ marginTop: 12 }}>
            Replace with your real phone number before launch.
          </p>
        </article>

        <article className="card contact-card">
          <div className="icon-badge" aria-hidden="true">✉</div>
          <h3>Email</h3>
          <p className="lead">
            Best for owner inquiries, revenue estimates, and non-urgent direct booking questions.
          </p>
          <div className="btn-row" style={{ marginTop: 18 }}>
            <a className="btn btn-secondary" href="mailto:info@defstarmanagement.com">
              info@defstarmanagement.com
            </a>
          </div>
        </article>

        <article className="card contact-card">
          <div className="icon-badge" aria-hidden="true">⌂</div>
          <h3>Service Area</h3>
          <p className="lead">
            Tampa • St. Petersburg • Treasure Island • St. Pete Beach • Madeira Beach
          </p>
          <div className="btn-row" style={{ marginTop: 18 }}>
            <a className="btn btn-ghost" href="/revenue-estimate">Get Free Revenue Estimate</a>
          </div>
        </article>
      </section>
    </div>
  );
}
