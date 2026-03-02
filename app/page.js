// app/page.js
import Hero from "../components/Hero";
import CTA from "../components/CTA";

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: 18 }}>
      <Hero />

      <section className="grid grid-3">
        <div className="card">
          <h3>Owner-Focused</h3>
          <p className="muted">
            Revenue-minded management with clean operations and fast communication.
          </p>
        </div>
        <div className="card">
          <h3>Guest Experience</h3>
          <p className="muted">
            Message handling, issue resolution, and a smoother stay that earns reviews.
          </p>
        </div>
        <div className="card">
          <h3>Local & Legit</h3>
          <p className="muted">
            A real company page owners can verify — with a direct line to the manager.
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
