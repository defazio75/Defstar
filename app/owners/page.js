import Link from "next/link";

const ownerServices = [
  {
    title: "Listing optimization",
    copy: "Sharper copy, stronger positioning, and a cleaner online presentation that improves click-through and booking trust.",
  },
  {
    title: "Dynamic pricing",
    copy: "Nightly pricing adjusted for seasonality, market movement, local demand, and stay-length strategy.",
  },
  {
    title: "Guest communication",
    copy: "Fast, professional messaging before booking, during stay, and after checkout to help protect reviews.",
  },
  {
    title: "Cleaning coordination",
    copy: "Turnovers scheduled and organized with quality standards that keep the property photo-ready and guest-ready.",
  },
  {
    title: "Maintenance coordination",
    copy: "Vendor coordination, issue triage, and a more disciplined operating process for property care.",
  },
  {
    title: "Owner reporting",
    copy: "Monthly updates focused on revenue, occupancy, reviews, expenses, and where performance can improve.",
  },
];

export default function OwnersPage() {
  return (
    <div className="page-stack">
      <section className="card">
        <div className="eyebrow">Owner Services</div>
        <h2 className="section-title" style={{ marginTop: 18 }}>
          Full-service management that makes the property look better and run better.
        </h2>
        <p className="lead" style={{ maxWidth: 820, marginTop: 16 }}>
          We handle the presentation, guest experience, and daily operations so ownership feels smoother and more predictable.
        </p>
      </section>

      <section className="grid grid-3">
        {ownerServices.map((service, index) => (
          <article key={service.title} className="card service-card">
            <div className="icon-badge" aria-hidden="true">0{index + 1}</div>
            <h3>{service.title}</h3>
            <p className="lead">{service.copy}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-2">
        <article className="card card-dark">
          <div
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#eef7fb",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            Pricing
          </div>
          <h3 style={{ marginTop: 18, fontSize: "1.75rem" }}>Simple management structures.</h3>
          <p className="section-copy" style={{ marginTop: 12 }}>
            Clear fee structures, separately billed cleaning and maintenance, and a more transparent owner experience.
          </p>
        </article>

        <div className="grid">
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Short-Term Rental Management</h3>
            <p className="lead">For vacation rentals and shorter stays with full-service daily oversight.</p>
            <p className="kicker" style={{ marginTop: 16 }}>20% of revenue</p>
            <p className="small muted" style={{ marginTop: 8 }}>
              Cleaning and maintenance billed separately.
            </p>
          </article>

          <article className="card">
            <h3 style={{ marginTop: 0 }}>Mid-Term Rental Management</h3>
            <p className="lead">For 30+ day stays such as relocation, travel nurse, and corporate housing demand.</p>
            <p className="kicker" style={{ marginTop: 16 }}>10% of revenue</p>
            <p className="small muted" style={{ marginTop: 8 }}>
              Cleaning and maintenance billed separately.
            </p>
          </article>
        </div>
      </section>

      <section className="card">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Next step</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              See what your property could earn.
            </h2>
          </div>
          <Link href="/revenue-estimate" className="btn btn-primary">
            Get Free Revenue Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
