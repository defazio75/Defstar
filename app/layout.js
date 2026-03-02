// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "DefStar Management | Short-Term & Mid-Term Rental Management",
  description:
    "DefStar Management helps owners maximize rental revenue with full-service hosting, cleaning coordination, and guest communication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
