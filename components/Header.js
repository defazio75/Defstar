// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="header-bar" role="banner">
      <div className="container header-inner">
        <div className="brand">
          <img src="/images/logo.png" alt="DefStar Management logo" />
          <div>
            <Link href="/"><h1>DefStar Management</h1></Link>
            <div className="muted small">Tampa Bay • Guest-focused management</div>
          </div>
        </div>

        <div className="top-cta">
          <Link href="/owners"><button className="btn btn-ghost">Owner Services</button></Link>
          <a className="btn" href="/properties">View Properties</a>
          <a className="btn btn-primary" href="tel:+15555555555">Call: (555) 555-5555</a>
        </div>
      </div>
    </header>
  );
}
