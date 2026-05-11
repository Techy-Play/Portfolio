import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Contact — Lokesh Paneru",
  description: "Get in touch with Lokesh Paneru for collaborations, projects, or opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ParticleCanvas />
      <div className="container">
        <div className="page-header">
          <ScrollReveal>
            <Link href="/" className="back-link"><i className="fa-solid fa-arrow-left" /> Back to Home</Link>
            <span className="section-label">Get in Touch</span>
            <h1>Let&apos;s <span className="gradient-text">Connect</span></h1>
            <p>Have a project idea, collaboration, or just want to say hi? I&apos;d love to hear from you.</p>
          </ScrollReveal>
        </div>

        <div className="contact-grid" style={{ paddingBottom: 80 }}>
          <ScrollReveal className="contact-info">
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginBottom: 16 }}>
              Let&apos;s build something <span className="gradient-text">amazing</span> together
            </h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.85 }}>
              I&apos;m always open to discussing new projects, creative ideas, collaborations, or opportunities. Whether you need a website, an IoT prototype, or just want to connect — reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:lokeshpaneru20508@gmail.com" className="glass-card contact-link">
                <div className="contact-link-icon"><i className="fa-solid fa-envelope" /></div>
                <div className="contact-link-text"><h4>Email</h4><span>lokeshpaneru20508@gmail.com</span></div>
              </a>
              <a href="tel:+9197198983725" className="glass-card contact-link">
                <div className="contact-link-icon"><i className="fa-solid fa-phone" /></div>
                <div className="contact-link-text"><h4>Phone</h4><span>+91 97198983725</span></div>
              </a>
              <a href="https://github.com/Techy-Play" target="_blank" rel="noopener noreferrer" className="glass-card contact-link">
                <div className="contact-link-icon"><i className="fa-brands fa-github" /></div>
                <div className="contact-link-text"><h4>GitHub</h4><span>github.com/Techy-Play</span></div>
              </a>
              <a href="https://www.linkedin.com/in/lokeshpaneru/" target="_blank" rel="noopener noreferrer" className="glass-card contact-link">
                <div className="contact-link-icon"><i className="fa-brands fa-linkedin-in" /></div>
                <div className="contact-link-text"><h4>LinkedIn</h4><span>linkedin.com/in/lokeshpaneru</span></div>
              </a>
              <a href="https://youtube.com/@mrtechy9505" target="_blank" rel="noopener noreferrer" className="glass-card contact-link">
                <div className="contact-link-icon"><i className="fa-brands fa-youtube" /></div>
                <div className="contact-link-text"><h4>YouTube</h4><span>@mrtechy9505</span></div>
              </a>
              <div className="glass-card contact-link" style={{ cursor: "default" }}>
                <div className="contact-link-icon"><i className="fa-solid fa-location-dot" /></div>
                <div className="contact-link-text"><h4>Location</h4><span>Haldwani, Uttarakhand</span></div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </>
  );
}
