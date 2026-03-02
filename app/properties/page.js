// app/properties/page.js
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

export const metadata = {
  title: "Properties | DefStar Management",
  description: "Browse properties managed by DefStar Management.",
};

export default function PropertiesPage() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <header className="card">
        <h1>Managed Properties</h1>
        <p className="muted">
          Interested in booking? These are off-platform bookings: call/text or email for
          availability, pricing, and deposit details.
        </p>
      </header>

      <section className="grid grid-3">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </section>
    </div>
  );
}
