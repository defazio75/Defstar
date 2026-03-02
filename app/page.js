// app/page.js
import FeaturedProperties from "../components/FeaturedProperties";
import CTA from "../components/CTA";

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: 22 }}>
      <section className="hero card" aria-label="hero">
        <div className="left">
          <h2>Hospitality-first management for Tampa Bay hosts</h2>
          <p className="muted">
            Full-service short-term & mid-term rental management: guest care, pricing optimization,
            professional turnovers, and local presence. Book direct or request an owner consultation.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+15555555555">Call to Book</a>
            <a className="btn btn-ghost" href="/properties">View Properties</a>
            <a className="btn" href="/owners" style={{border:'1px solid rgba(15,23,32,0.06)'}}>Owner Services</a>
          </div>

          <div style={{marginTop:18}} className="muted small">
            <strong>Local team • Guest-first • 24/7 messaging</strong>
          </div>
        </div>

        <div className="image">
          <img src="/images/hero-warm.jpg" alt="Cozy rental interior" style={{width:'100%',height:'100%',display:'block',objectFit:'cover'}}/>
        </div>
      </section>

      <section className="card">
        <h3 className="section-title">Featured Properties</h3>
        <FeaturedProperties />
      </section>

      <section className="card">
        <h3 className="section-title">Why owners choose DefStar</h3>
        <div className="grid grid-3">
          <div className="card">
            <h4 style={{marginTop:0}}>Transparent fees</h4>
            <p className="muted small">No hidden costs. Cleaning & maintenance billed separately and fully itemized.</p>
          </div>
          <div className="card">
            <h4 style={{marginTop:0}}>Local operations</h4>
            <p className="muted small">We live and work in Tampa Bay — quick turnarounds, trusted contractors, and walkthroughs.</p>
          </div>
          <div className="card">
            <h4 style={{marginTop:0}}>Guest-first support</h4>
            <p className="muted small">Rapid response, professional hospitality training, and review-focused service.</p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
