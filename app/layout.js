import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "DefStar Management | Tampa Bay STR & Mid-Term Rental Management",
  description:
    "Professional short-term and mid-term rental management for Tampa Bay, St. Petersburg, and the Gulf Beaches.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="page-shell">
            <div className="container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
