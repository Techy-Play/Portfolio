import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/siteData";

export const metadata = {
  title: "Certifications — Lokesh Paneru",
  description: "Professional certifications and training completed by Lokesh Paneru.",
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <ParticleCanvas />
      <div className="container">
        <div className="page-header">
          <ScrollReveal>
            <Link href="/" className="back-link"><i className="fa-solid fa-arrow-left" /> Back to Home</Link>
            <span className="section-label">Certifications</span>
            <h1>My <span className="gradient-text">Certifications</span></h1>
            <p>Professional certifications and training that validate my skills across different domains.</p>
          </ScrollReveal>
        </div>

        <div className="cert-detail-grid" style={{ paddingBottom: 80 }}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.slug} delay={i * 0.06}>
              <Link href={`/certifications/${cert.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="glass-card cert-full-card">
                  <div className="cert-image-wrapper">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={280}
                      className="cert-image"
                    />
                    <div className="cert-image-overlay">
                      <span>View Certificate →</span>
                    </div>
                  </div>
                  <div className="cert-full-info">
                    <div className="cert-icon-mini"><i className="fa-solid fa-certificate" /></div>
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer"><i className="fa-solid fa-building-columns" /> {cert.issuer}</p>
                    {cert.date && <p className="cert-date"><i className="fa-regular fa-calendar" /> {cert.date}</p>}
                    <p className="cert-desc">{cert.description}</p>
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="cert-skills">
                        {cert.skills.map((s) => <span key={s} className="cert-skill-tag">{s}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
