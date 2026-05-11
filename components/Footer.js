import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">&lt;LP /&gt;</Link>
            <p className="footer-tagline">Building smart solutions with code, creativity, and innovation.</p>
          </div>

          <div className="footer-nav-group">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link href="/#about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/certifications">Certifications</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-nav-group">
            <h4>Projects</h4>
            <nav className="footer-nav">
              <Link href="/projects/smart-recycling-hub">Smart Recycling Hub</Link>
              <Link href="/projects/acadex">Acadex</Link>
              <Link href="/projects/alumni-connect-platform">AMP-Devs</Link>
              <Link href="/projects/smart-cleaning-bot">Cleaning Bot</Link>
            </nav>
          </div>

          <div className="footer-nav-group">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="https://github.com/Techy-Play" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/lokeshpaneru/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://youtube.com/@mrtechy9505" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href="mailto:lokeshpaneru20508@gmail.com" className="footer-social-link" aria-label="Email">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {currentYear} Lokesh Paneru. Crafted with <span style={{ color: "var(--neon-purple)" }}>♥</span> and code.</p>
          <p className="footer-tech">Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
