import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../utils/constants";
import "./Navbar.css";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo("home")}>
          <span className="navbar__logo-mark">✦</span>
          <span className="navbar__logo-text">Café<strong>Arte</strong></span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__cta btn-primary"
          onClick={() => scrollTo("contact")}
        >
          Reservar mesa
        </button>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}