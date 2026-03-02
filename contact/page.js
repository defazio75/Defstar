// app/contact/page.js
export const metadata = {
  title: "Contact | DefStar Management",
  description: "Contact DefStar Management for bookings or management inquiries.",
};

export default function ContactPage() {
  // Replace these with your real info:
  const phone = "(XXX) XXX-XXXX";
  const email = "info@defstarmanagement.com";

  return (
    <div className="grid" style={{ gap: 16 }}>
      <header className="card">
        <h1>Contact</h1>
        <p className="muted">
          For reservations: call/text with your dates and the property name.
          <br />
          For owners: reach out for a management quote.
        </p>
      </header>

      <section className="grid grid-2">
        <div className="card">
          <h2>Call / Text</h2>
          <p className="muted">
            <strong>{phone}</strong>
          </p>
          <p className="muted">
            Best for quick availability checks and booking requests.
          </p>
          <a className="btn btn-primary" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
            Call Now
          </a>
        </div>

        <div className="card">
          <h2>Email</h2>
          <p className="muted">
            <strong>{email}</strong>
          </p>
          <p className="muted">
            Best for owner inquiries, longer questions, or documents.
          </p>
          <a className="btn" href={`mailto:${email}`}>
            Email Us
          </a>
        </div>
      </section>

      <section className="card">
        <h2>What to include</h2>
        <ul className="muted">
          <li>Your name + best callback number</li>
          <li>Dates (check-in/check-out) + number of guests</li>
          <li>Property name (or link from our Properties page)</li>
          <li>If owner: address, bedrooms/baths, and current performance</li>
        </ul>
      </section>
    </div>
  );
}
