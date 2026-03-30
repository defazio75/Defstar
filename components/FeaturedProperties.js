import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <div className="property-grid">
      {properties.slice(0, 3).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
