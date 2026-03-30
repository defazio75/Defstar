export default function PropertyCard({ property }) {
  const { name, location, nightsMin, priceFrom, guests, image } = property;

  return (
    <article className="card property-card">
      <div className="property-image-wrap">
        <div className="property-badge-row">
          <span className="property-badge">Featured stay</span>
          <span className="property-badge">{nightsMin}+ nights</span>
        </div>
        <img src={image} alt={name} />
      </div>

      <div className="property-body">
        <div>
          <h3 className="property-title">{name}</h3>
          <p className="small muted" style={{ margin: "8px 0 0" }}>
            {location}
          </p>
        </div>

        <div className="feature-list">
          <span className="feature-pill">{guests} guests</span>
          <span className="feature-pill">Professionally managed</span>
          <span className="feature-pill">Direct inquiry available</span>
        </div>

        <div className="property-meta">
          <div className="small muted">
            Ideal for beach trips, relocations, and extended stays.
          </div>
          <div className="price-note">
            <strong>${priceFrom}</strong>
            <span className="small muted">from / night</span>
          </div>
        </div>

        <div className="btn-row">
          <a className="btn btn-secondary" href="tel:+15555555555">
            Call to Book
          </a>
          <a
            className="btn btn-primary"
            href={`mailto:info@defstarmanagement.com?subject=Booking%20Inquiry%20-%20${encodeURIComponent(name)}`}
          >
            Email Inquiry
          </a>
        </div>
      </div>
    </article>
  );
}
