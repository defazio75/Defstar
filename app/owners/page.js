// app/owners/page.js
import CTA from "../../components/CTA";

export const metadata = {
  title: "For Owners | DefStar Management",
  description:
    "Short-term and mid-term rental management in Tampa Bay / St. Pete. Full-service hosting and operations.",
};

export default function OwnersPage() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <header className="card">
        <h1>For Owners</h1>
        <p className="muted">
          We help owners run cleaner operations and earn more revenue with better
          pricing, guest handling, and strong local execution.
        </p>
      </header>

      <section className="grid grid-2">
        <div className="card">
          <h2>Short-Term Rental Management</h2>
          <p className="muted">
            Full hosting for 1–30 nights: listing optimization, pricing, guest messaging,
            property oversight, and coordination for turnovers/maintenance.
          </p>
          <ul className="muted">
            <li>Revenue optimization & calendar management</li>
            <li>Guest messaging & issue resolution</li>
            <li>Cleaning + maintenance coordination (billed separately)</li>
          </ul>
        </div>

        <div className="card">
          <h2>Mid-Term Rental Management</h2>
          <p className="muted">
            30+ day stays: marketing, screening support, lease coordination, and ongoing
            management with reliable vendor coordination.
          </p>
          <ul className="muted">
            <li>Marketing + inquiry handling</li>
            <li>Showings/coordination (where applicable)</li>
            <li>Cleaning + maintenance coordination (billed separately)</li>
          </ul>
        </div>
      </section>

      <CTA />
    </div>
  );
}
