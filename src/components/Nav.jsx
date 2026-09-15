import { useEffect, useState } from "react";
import { List, X, DownloadSimple } from "@phosphor-icons/react";
import { nav, profile } from "../data/content";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" aria-label={`${profile.name} — home`}>
          {profile.initials}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href={profile.resumeHref} className="btn btn-secondary nav__resume" download>
          <DownloadSimple size={16} weight="bold" aria-hidden="true" />
          Resume
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${open ? "nav__mobile--open" : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={profile.resumeHref} className="btn btn-primary" download onClick={() => setOpen(false)}>
          <DownloadSimple size={16} weight="bold" aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </header>
  );
}
