import Link from "next/link";

export default function CTA() {
  return (
    <section className="card card-dark cta-banner">
      <div>
        <div
          className="eyebrow"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "#eef7fb",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          Owner growth
        </div>
        <h2 className="section-title" style={{ marginTop: 18 }}>
          Want to know what your property could really earn?
        </h2>
        <p className="section-copy" style={{ marginTop: 14 }}>
          We’ll review your home, market position, and revenue potential, then send back a clean
          estimate with next-step recommendations.
        </p>
      </div>

      <div
        className="glass-card"
        style={{
          background: "rgba(255,255,255,0.12)",
          borderColor: "rgba(255,255,255,0.14)",
        }}
      >
        <p className="small" style={{ margin: 0 }}>
          Great fit for owners who are:
        </p>
        <ul className="list-reset" style={{ display: "grid", gap: 10, marginTop: 14 }}>
          <li>• Launching their first STR</li>
          <li>• Comparing management options</li>
          <li>• Looking to improve revenue and guest experience</li>
        </ul>

        <div className="cta-actions" style={{ marginTop: 18 }}>
          <Link href="/revenue-estimate" className="btn btn-gold">
            Request Estimate
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact DefStar
          </Link>
        </div>
      </div>
    </section>
  );
}
