"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container">
        <Link href="/" className="nav-logo">&lt;LP /&gt;</Link>
        <div className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
          <a href="/#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="/#experience" onClick={() => setMobileOpen(false)}>Experience</a>
          <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
          <a href="/#skills" onClick={() => setMobileOpen(false)}>Skills</a>
          <Link href="/certifications" onClick={() => setMobileOpen(false)}>Certifications</Link>
          <Link href="/achievements" onClick={() => setMobileOpen(false)}>Achievements</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
        <Link href="/contact" className="nav-cta">Let&apos;s Connect</Link>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
        >
          <span style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
          <span style={mobileOpen ? { opacity: 0 } : {}} />
          <span style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
        </button>
      </div>
    </nav>
  );
}
