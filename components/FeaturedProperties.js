import { properties } from "../data/properties";

export default function FeaturedProperties() {
  const featured = properties.slice(0, 3);

  return (
    <div className="prop-grid">
      {featured.map((p) => (
        <article key={p.id} className="card property-card">
          <div className="property-thumb-wrap">
            <div className="property-badge">Featured stay</div>
            <img src={p.image} alt={p.name} />
          </div>

          <div className="property-body">
            <div>
              <h3 style={{ margin: 0, fontSize: "1.25rem", letterSpacing: "-0.03em" }}>{p.name}</h3>
              <div className="muted small" style={{ marginTop: 8 }}>
                {p.location}
              </div>
            </div>

            <div className="feature-pill-row">
              <span className="feature-pill">{p.guests} guests</span>
              <span className="feature-pill">{p.nightsMin}+ nights</span>
              <span className="feature-pill">Professionally managed</span>
            </div>

            <div className="property-meta">
              <div className="small muted">Direct booking and inquiry available</div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 800, fontSize: "1.3rem" }}>${p.priceFrom}</div>
                <div className="small muted">from / night</div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
