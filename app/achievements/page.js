import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Link from "next/link";
import { achievements } from "@/data/siteData";

export const metadata = {
  title: "Achievements — Lokesh Paneru",
  description: "Awards, competitions, and milestones achieved by Lokesh Paneru.",
};

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <ParticleCanvas />
      <div className="container">
        <div className="page-header">
          <ScrollReveal>
            <Link href="/" className="back-link"><i className="fa-solid fa-arrow-left" /> Back to Home</Link>
            <span className="section-label">Achievements</span>
            <h1>Milestones & <span className="gradient-text">Awards</span></h1>
            <p>A summary of my competitive achievements, hackathon victories, and academic accomplishments.</p>
          </ScrollReveal>
        </div>

        <div className="achievements-grid" style={{ paddingBottom: 40 }}>
          {achievements.map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card achievement-card">
                <div className="achievement-icon">{a.icon}</div>
                <h4>{a.title}</h4>
                <p>{a.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Extra Details */}
        <ScrollReveal>
          <div className="glass-card" style={{ padding: 32, marginBottom: 80 }}>
            <span className="section-label">Extracurriculars</span>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginTop: 8, marginBottom: 16 }}>Beyond <span className="gradient-text">Competitions</span></h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
              <i className="fa-solid fa-hands-holding-circle" style={{ color: "var(--neon-blue)", marginRight: 8 }} />
              Participated in a <strong>seven-day NSS (National Service Scheme) camp</strong> at Hargovind Suyal Saraswati Vidya Mandir focused on community service and social awareness activities.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </>
  );
}
