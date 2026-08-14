import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <nav>
          <Logo onClick={closeMenu} />

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#enterprise" onClick={closeMenu}>Enterprise</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-ghost">Log in</a>
            <a href="#contact" className="btn btn-primary">Start a project</a>
          </div>

          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
}