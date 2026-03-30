export default function PropertyCard({ property }) {
  const { name, location, nightsMin, priceFrom, guests, image } = property;

  return (
    <article className="card property-card">
      <div className="property-thumb-wrap">
        <div className="property-badge">{nightsMin}+ nights</div>
        <img src={image} alt={name} />
      </div>

      <div className="property-body">
        <div>
          <h3 style={{ margin: 0, fontSize: "1.25rem", letterSpacing: "-0.03em" }}>{name}</h3>
          <div className="muted small" style={{ marginTop: 8 }}>
            {location}
          </div>
        </div>

        <div className="feature-pill-row">
          <span className="feature-pill">{guests} guests</span>
          <span className="feature-pill">Direct inquiry</span>
          <span className="feature-pill">Managed by DefStar</span>
        </div>

        <div className="property-meta">
          <div className="small muted">
            Ideal for beach trips, relocations, and extended stays.
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: 800, fontSize: "1.3rem" }}>${priceFrom}</div>
            <div className="small muted">from / night</div>
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
