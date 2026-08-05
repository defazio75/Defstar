import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Revenue Management",
    description:
      "Dynamic pricing, minimum-stay strategy, seasonal positioning, and listing optimization designed to improve both occupancy and nightly rate.",
  },
  {
    number: "02",
    title: "Guest Operations",
    description:
      "Responsive guest communication, reservation support, check-in coordination, issue resolution, and review management.",
  },
  {
    number: "03",
    title: "Property Care",
    description:
      "Turnover coordination, property inspections, supply management, maintenance support, and dependable local oversight.",
  },
];

const process = [
  {
    step: "01",
    title: "Review the property",
    description:
      "We assess the location, condition, competition, regulations, and current rental performance.",
  },
  {
    step: "02",
    title: "Build the strategy",
    description:
      "You receive a realistic revenue outlook and a recommended short-term or mid-term rental plan.",
  },
  {
    step: "03",
    title: "Launch or transition",
    description:
      "We improve the listing, pricing, presentation, guest journey, and operating systems.",
  },
  {
    step: "04",
    title: "Manage and optimize",
    description:
      "DefStar handles day-to-day execution while you receive clear reporting and recommendations.",
  },
];

const markets = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "St. Pete Beach",
  "Treasure Island",
  "Madeira Beach",
  "Gulfport",
  "Tampa Bay",
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-background" aria-hidden="true" />

        <div className="container home-hero-inner">
          <div className="home-hero-content">
            <p className="home-kicker">
              Tampa Bay vacation-rental management
            </p>

            <h1>
              Your property should earn more and feel effortless to own.
            </h1>

            <p className="home-hero-description">
              DefStar provides full-service short-term and mid-term rental
              management for Tampa Bay owners who want stronger revenue,
              dependable local operations, and a better guest experience.
            </p>

            <div className="home-hero-actions">
              <Link href="/revenue-estimate" className="btn btn-gold">
                Get a Free Revenue Estimate
              </Link>

              <Link href="/owners" className="btn btn-light-outline">
                Explore Owner Services
              </Link>
            </div>

            <div className="home-hero-proof">
              <div>
                <strong>24/7</strong>
                <span>Guest communication</span>
              </div>

              <div>
                <strong>Local</strong>
                <span>Tampa Bay operations</span>
              </div>

              <div>
                <strong>Flexible</strong>
                <span>Short and mid-term strategies</span>
              </div>
            </div>
          </div>

          <aside className="home-hero-card">
            <span className="home-card-label">Owner-focused management</span>

            <h2>
              Better presentation. Better operations. Better rental
              performance.
            </h2>

            <p>
              We bring together pricing, hospitality, property care, and owner
              reporting under one locally managed service.
            </p>

            <ul className="home-check-list">
              <li>Professional listing setup and optimization</li>
              <li>Dynamic pricing and calendar management</li>
              <li>Guest messaging and reservation support</li>
              <li>Cleaning and maintenance coordination</li>
              <li>Clear monthly owner reporting</li>
            </ul>

            <Link href="/contact" className="home-text-link">
              Talk with DefStar
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </section>

      <section className="home-trust-bar">
        <div className="container home-trust-grid">
          <span>Short-Term Rental Management</span>
          <span>Mid-Term Rental Management</span>
          <span>Revenue Optimization</span>
          <span>Local Property Oversight</span>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker home-kicker-dark">
                Full-service management
              </p>

              <h2>
                Everything your rental needs, handled by one local partner.
              </h2>
            </div>

            <p>
              DefStar helps owners simplify operations, protect the guest
              experience, and build a more valuable rental property.
            </p>
          </div>

          <div className="home-service-grid">
            {services.map((service) => (
              <article className="home-service-card" key={service.title}>
                <span className="home-service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link href="/owners">
                  Learn more
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-feature-section">
        <div className="container home-feature-grid">
          <div className="home-feature-image">
            <img
              src="/images/oceanpic.jpg"
              alt="Tampa Bay waterfront vacation rental balcony"
            />

            <div className="home-image-caption">
              <span>Premium presentation</span>
              <strong>
                The guest experience begins before the reservation is made.
              </strong>
            </div>
          </div>

          <div className="home-feature-content">
            <p className="home-kicker home-kicker-dark">
              More than calendar management
            </p>

            <h2>
              We help your property compete like a hospitality business.
            </h2>

            <p>
              Successful vacation rentals require more than answering messages
              and scheduling cleaners. They require thoughtful positioning,
              strong presentation, responsive service, pricing discipline, and
              consistent execution.
            </p>

            <div className="home-feature-points">
              <div>
                <span>01</span>
                <div>
                  <h3>Stronger market positioning</h3>
                  <p>
                    We evaluate your competition and improve how the property is
                    presented, priced, and marketed.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <h3>A more consistent guest experience</h3>
                  <p>
                    Clear communication and dependable operations protect
                    reviews and encourage repeat bookings.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <h3>Greater owner visibility</h3>
                  <p>
                    You receive practical updates about performance, expenses,
                    property issues, and upcoming opportunities.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/revenue-estimate" className="btn btn-primary">
              Request Your Property Review
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-process-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker home-kicker-dark">How it works</p>

              <h2>
                A straightforward path from property review to better
                performance.
              </h2>
            </div>

            <p>
              Whether the property is already operating or preparing to launch,
              we build the management plan around its location, condition, and
              earning potential.
            </p>
          </div>

          <div className="home-process-grid">
            {process.map((item) => (
              <article className="home-process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-market-section">
        <div className="container home-market-grid">
          <div>
            <p className="home-kicker">Locally focused</p>

            <h2>
              Vacation-rental management throughout Tampa Bay.
            </h2>

            <p>
              Local knowledge matters. Seasonality, neighborhood demand,
              municipal rules, guest expectations, and property operations can
              vary significantly across Tampa Bay.
            </p>

            <Link href="/contact" className="btn btn-gold">
              Discuss Your Property
            </Link>
          </div>

          <div className="home-market-list">
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="container home-final-cta-inner">
          <div>
            <p className="home-kicker">Start with the numbers</p>

            <h2>
              Find out what your Tampa Bay property could earn.
            </h2>

            <p>
              Request a complimentary revenue estimate and rental-strategy
              review from DefStar Management.
            </p>
          </div>

          <div className="home-final-actions">
            <Link href="/revenue-estimate" className="btn btn-gold">
              Get My Revenue Estimate
            </Link>

            <Link href="/contact" className="btn btn-light-outline">
              Contact DefStar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
