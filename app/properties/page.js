import { properties } from "../../data/properties";
import PropertyCard from "../../components/PropertyCard";

export default function PropertiesPage() {
  return (
    <div className="page-stack">
      <section className="card">
        <div className="eyebrow">Vacation rentals</div>
        <h2 className="section-title" style={{ marginTop: 18 }}>
          Featured stays across Tampa Bay and St. Petersburg.
        </h2>
        <p className="section-copy" style={{ marginTop: 14 }}>
          Browse a few example properties below. For direct reservations, availability, or owner questions,
          contact us directly.
        </p>
      </section>

      <section className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
}
