import Link from "next/link";

const navItems = [
  { href: "/properties", label: "Properties" },
  { href: "/owners", label: "Owner Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="container site-nav-wrap">
      <header className="site-nav" aria-label="Primary">
        <Link href="/" className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">
            D★
          </div>

          <div>
            <h1 className="brand-title">DefStar Management</h1>
            <div className="brand-subtitle">Tampa Bay • St. Pete • Gulf Beaches</div>
          </div>
        </Link>

        <nav className="site-nav-links" aria-label="Site navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}

          <Link href="/revenue-estimate" className="btn btn-secondary">
            Free Revenue Estimate
          </Link>
          <a className="btn btn-primary" href="tel:+15555555555">
            Call / Text
          </a>
        </nav>
      </header>
    </div>
  );
}
