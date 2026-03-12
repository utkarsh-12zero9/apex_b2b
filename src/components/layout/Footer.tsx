import "./Footer.css";
import Link from "next/link";

const footerLinks = [
  { label: "Key Outcomes", href: "#outcomes" },
  { label: "Program", href: "#program" },
  { label: "Curriculum", href: "#systems" },
  { label: "Why Apex", href: "#why-apex" },
  { label: "Book a Call", href: "#consultation" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link href="#home" className="footer__logo">
              <span className="footer__logo-icon" aria-hidden="true">▲</span>
              <span className="footer__logo-text">Apex</span>
            </Link>
            <p className="footer__tagline">
              AI-powered sales training for modern B2B teams.
            </p>
          </div>
          <nav className="footer__links" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Apex. All rights reserved.</p>
        </div>
      </div>

      
    </footer>
  );
}
