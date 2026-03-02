// components/FeaturedProperties.js
import { properties } from "../data/properties";

export default function FeaturedProperties() {
  const featured = properties.slice(0, 3);
  return (
    <div className="prop-grid" style={{ marginTop: 10 }}>
      {featured.map((p) => (
        <div key={p.id} className="card property-card">
          <img className="property-thumb" src={p.image} alt={p.name} />
          <div style={{ padding: 12 }}>
            <h3 style={{ margin: 0 }}>{p.name}</h3>
            <div className="muted small">{p.location}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <div className="muted small">{p.guests} guests</div>
              <div style={{ fontWeight: 800 }}>${p.priceFrom}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
