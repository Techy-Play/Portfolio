import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import TypingText from "@/components/TypingText";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/data/projects";
import { experience, education, skills, certifications, achievements, interests } from "@/data/siteData";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Navbar />
      <ParticleCanvas />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><span className="dot" /> Open to Opportunities</div>
            <h1 className="hero-name">Hi, I&apos;m <span className="gradient-text">Lokesh Paneru</span></h1>
            <TypingText />
            <p className="hero-tagline">B.Tech CSE student focused on IoT and Data Science, designing secure, human-centered technology across web, AI, and robotics.</p>
            <div className="hero-buttons">
              <Link href="/projects" className="btn-primary"><i className="fa-solid fa-rocket" /> View Projects</Link>
              <Link href="/contact" className="btn-outline"><i className="fa-solid fa-paper-plane" /> Get in Touch</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="stat-number">8+</div><div className="stat-label">Projects</div></div>
              <div className="hero-stat"><div className="stat-number">8.56</div><div className="stat-label">CGPA</div></div>
              <div className="hero-stat"><div className="stat-number">13+</div><div className="stat-label">Certifications</div></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <div className="hero-image-ring">
              <div className="hero-image">
                <Image src="/profile-lokesh.png" alt="Lokesh Paneru" width={320} height={320} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Profile</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </ScrollReveal>
          <div className="about-grid">
            <ScrollReveal className="about-text">
              <p>B.Tech CSE student specializing in <strong>IoT and Data Science</strong> at <strong>Amrapali University</strong>, currently exploring AI, web development, and IoT integration. I have gained hands-on experience in Python programming, prompt engineering, and small-scale IoT projects.</p>
              <p>Passionate about <strong>robotics, automation, and ethical AI</strong>, I am building practical skills through projects, competitions, and real-world learning opportunities.</p>
            </ScrollReveal>
            <div className="about-highlights">
              {[
                { icon: "🌐", title: "Full-Stack Dev", desc: "React, Next.js, Node.js & modern web tech" },
                { icon: "📡", title: "IoT & Embedded", desc: "ESP32, Arduino, sensors & smart automation" },
                { icon: "🛡️", title: "Cybersecurity", desc: "Kali Linux, security fundamentals & ethical hacking" },
                { icon: "🤖", title: "AI / ML", desc: "Prompt engineering, data annotation & model evaluation" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="glass-card about-highlight-card">
                    <span className="highlight-icon">{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Education</span>
            <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
          </ScrollReveal>
          <div className="timeline">
            {education.map((ed, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card timeline-card">
                  <div className="timeline-dot" />
                  <div className="timeline-date">{ed.date}</div>
                  <h3>{ed.degree}</h3>
                  <h4>{ed.school}</h4>
                  <ul>{ed.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Experience</span>
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          </ScrollReveal>
          <div className="timeline">
            {experience.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card timeline-card">
                  <div className="timeline-dot" />
                  <div className="timeline-date">{exp.date}</div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <ul>{exp.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section" id="projects">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">My Work</span>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">Real-world solutions built with passion and purpose.</p>
          </ScrollReveal>
          <div className="projects-grid">
            {featured.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="glass-card project-card">
                    <div className="project-card-header">
                      <div className="project-number">Project {project.number}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-tags">
                      {project.techStack.slice(0, 5).map((t) => <span key={t} className="project-tag">{t}</span>)}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/projects" className="btn-outline"><i className="fa-solid fa-grid-2" /> View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">My Skills</span>
            <h2 className="section-title">Technologies I <span className="gradient-text">Work With</span></h2>
          </ScrollReveal>
          <div className="skills-categories">
            {skills.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card skill-category-card">
                  <h3><i className={`fa-solid ${cat.icon}`} /> {cat.category}</h3>
                  <div className="skill-pills">
                    {cat.items.map((s) => <span key={s} className="skill-pill">{s}</span>)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS PREVIEW */}
      <section className="section" id="certifications">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Certifications</span>
            <h2 className="section-title">Certified <span className="gradient-text">Skills</span></h2>
          </ScrollReveal>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.slug} delay={i * 0.08}>
                <Link href={`/certifications/${cert.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="glass-card cert-card">
                    <div className="cert-icon"><i className="fa-solid fa-certificate" /></div>
                    <h4>{cert.title}</h4>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/certifications" className="btn-outline"><i className="fa-solid fa-award" /> View All Certifications →</Link>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS PREVIEW */}
      <section className="section" id="achievements">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">Achievements</span>
            <h2 className="section-title">Milestones & <span className="gradient-text">Awards</span></h2>
          </ScrollReveal>
          <div className="achievements-grid">
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
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/achievements" className="btn-outline"><i className="fa-solid fa-trophy" /> View All Achievements →</Link>
          </div>
        </div>
      </section>

      {/* INTERESTS & RESUME */}
      <section className="section" id="interests">
        <div className="container">
          <div className="interests-split">
            <ScrollReveal>
              <span className="section-label">Interests</span>
              <h2 className="section-title" style={{ marginBottom: 24 }}>What Drives <span className="gradient-text">Me</span></h2>
              <div className="interests-list">
                {interests.map((item, i) => (
                  <div key={i} className="glass-card interest-pill-card">
                    <i className={`fa-solid ${item.icon}`} /> {item.label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <span className="section-label">Resume</span>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Download <span className="gradient-text">Resume</span></h2>
              <div className="glass-card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>📄</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>Lokesh Paneru — Resume</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: 24, fontSize: "0.92rem" }}>Get a detailed overview of my education, skills, projects, and experience.</p>
                <a href="/resume/Lokesh_Paneru_Resume.pdf" download className="btn-primary"><i className="fa-solid fa-download" /> Download Resume</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTACT CTA — Link to Contact Page */}
      <section className="section" id="contact">
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h2>
            <p className="section-subtitle" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 36 }}>
              Have a project idea, collaboration, or just want to say hi? I&apos;d love to hear from you.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary"><i className="fa-solid fa-paper-plane" /> Send Me a Message</Link>
              <a href="mailto:lokeshpaneru20508@gmail.com" className="btn-outline"><i className="fa-solid fa-envelope" /> Email Directly</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
