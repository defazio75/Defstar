import Link from "next/link";

export default function CTA() {
  return (
    <section className="card card-dark">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(240px, 0.85fr)",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="eyebrow"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#eef8fb",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            Owner growth
          </div>

          <h2 className="section-title" style={{ marginTop: 18 }}>
            Curious what your property could really earn?
          </h2>

          <p className="section-copy" style={{ marginTop: 14 }}>
            We’ll review the home, the market, and your revenue potential, then send
            back a clean owner-friendly estimate with practical next-step recommendations.
          </p>
        </div>

        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <div className="small" style={{ color: "rgba(238,248,251,0.82)" }}>
            Great for owners who are:
          </div>

          <div
            style={{
              display: "grid",
              gap: 10,
              marginTop: 14,
              color: "rgba(238,248,251,0.82)",
            }}
            className="small"
          >
            <div>• Launching their first STR</div>
            <div>• Comparing management companies</div>
            <div>• Looking to improve revenue and presentation</div>
          </div>

          <div className="btn-row" style={{ marginTop: 18 }}>
            <Link href="/revenue-estimate" className="btn btn-gold">
              Request Estimate
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
