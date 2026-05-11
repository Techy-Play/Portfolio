import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { certifications, getCertBySlug, getOtherCerts } from "@/data/siteData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cert = getCertBySlug(slug);
  if (!cert) return { title: "Certificate Not Found" };
  return {
    title: `${cert.title} — Lokesh Paneru`,
    description: cert.description,
  };
}

export default async function CertDetailPage({ params }) {
  const { slug } = await params;
  const cert = getCertBySlug(slug);
  if (!cert) notFound();

  const otherCerts = getOtherCerts(slug, 3);

  return (
    <>
      <Navbar />
      <ParticleCanvas />
      <div className="container project-detail">
        <div className="project-detail-header">
          <Link href="/certifications" className="back-link">
            <i className="fa-solid fa-arrow-left" /> Back to Certifications
          </Link>
          <span className="section-label">Certification</span>
          <h1>{cert.title}</h1>
          <div className="project-meta">
            <span><i className="fa-solid fa-building-columns" /> {cert.issuer}</span>
            {cert.date && <span><i className="fa-regular fa-calendar" /> Issued {cert.date}</span>}
          </div>
          <p className="description">{cert.description}</p>

          {/* Skills */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="tech-stack-pills" style={{ marginBottom: 32 }}>
              {cert.skills.map((s) => <span key={s} className="tech-stack-pill">{s}</span>)}
            </div>
          )}
        </div>

        {/* Certificate Image */}
        <div className="glass-card" style={{ padding: 24, marginBottom: 32, textAlign: "center" }}>
          <Image
            src={cert.image}
            alt={cert.title}
            width={800}
            height={560}
            style={{ width: "100%", height: "auto", borderRadius: "var(--radius-sm)", objectFit: "contain" }}
          />
        </div>

        {/* Credential Verification Section */}
        {cert.credentialId && (
          <div className="glass-card credential-section" style={{ marginBottom: 48 }}>
            <div className="credential-header">
              <div className="credential-icon">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <div>
                <h3>Verify this Credential</h3>
                <p>This certification can be independently verified using the credential ID below.</p>
              </div>
            </div>

            <div className="credential-details">
              <div className="credential-row">
                <span className="credential-label"><i className="fa-solid fa-fingerprint" /> Credential ID</span>
                <span className="credential-value">{cert.credentialId}</span>
              </div>
              <div className="credential-row">
                <span className="credential-label"><i className="fa-solid fa-building-columns" /> Issuing Organization</span>
                <span className="credential-value">{cert.issuer}</span>
              </div>
              {cert.date && (
                <div className="credential-row">
                  <span className="credential-label"><i className="fa-regular fa-calendar" /> Issue Date</span>
                  <span className="credential-value">{cert.date}</span>
                </div>
              )}
            </div>

            <div className="credential-actions">
              <a
                href={getVerifyUrl(cert)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" /> Verify Credential
              </a>
              <button
                className="btn-outline credential-copy"
                onClick={null}
                data-credential={cert.credentialId}
              >
                <i className="fa-regular fa-copy" /> Copy ID
              </button>
            </div>
          </div>
        )}

        {/* If no credential ID, show basic info card */}
        {!cert.credentialId && (
          <div className="glass-card" style={{ padding: 24, marginBottom: 48, textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: 12 }}><i className="fa-solid fa-certificate" style={{ color: "var(--neon-purple)" }} /></div>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: 8 }}>Certified by {cert.issuer}</h3>
            {cert.date && <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Issued {cert.date}</p>}
          </div>
        )}

        {/* Other Certifications — Recommendations */}
        {otherCerts.length > 0 && (
          <div style={{ paddingBottom: 60 }}>
            <span className="section-label">More Certifications</span>
            <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 24 }}>Also <span className="gradient-text">Earned</span></h2>
            <div className="recommend-grid">
              {otherCerts.map((c) => (
                <Link key={c.slug} href={`/certifications/${c.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="glass-card recommend-card">
                    <div className="recommend-image-wrapper">
                      <Image src={c.image} alt={c.title} width={300} height={200} className="recommend-image" />
                    </div>
                    <div className="recommend-info">
                      <h4>{c.title}</h4>
                      <p>{c.issuer} · {c.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

// Helper to generate verify URLs based on issuer
function getVerifyUrl(cert) {
  const issuer = cert.issuer.toLowerCase();
  if (issuer.includes("hackerrank")) return `https://www.hackerrank.com/certificates/${cert.credentialId}`;
  if (issuer.includes("cisco")) return `https://www.credly.com/badges/${cert.credentialId}`;
  if (issuer.includes("red hat")) return `https://rhtapps.redhat.com/verify?certId=${cert.credentialId}`;
  if (issuer.includes("rasa")) return `https://academy.rasa.io/certificates/${cert.credentialId}`;
  if (issuer.includes("simplilearn")) return `https://www.simplilearn.com/skillup-certificate-landing?token=${cert.credentialId}`;
  // Default — LinkedIn profile
  return "https://www.linkedin.com/in/lokeshpaneru/details/certifications/";
}
