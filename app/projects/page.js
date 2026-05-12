import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Browse all projects by Lokesh Paneru — IoT, Web Development, Robotics, and more.",
  openGraph: {
    title: "Projects | Lokesh Paneru",
    description: "Browse all projects by Lokesh Paneru — IoT, Web Development, Robotics, and more.",
    url: "https://lokeshpaneru.vercel.app/projects",
  },
  twitter: {
    title: "Projects | Lokesh Paneru",
    description: "Browse all projects by Lokesh Paneru — IoT, Web Development, Robotics, and more.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ParticleCanvas />
      <div className="container">
        <div className="page-header">
          <ScrollReveal>
            <Link href="/" className="back-link"><i className="fa-solid fa-arrow-left" /> Back to Home</Link>
            <span className="section-label">All Projects</span>
            <h1>My <span className="gradient-text">Projects</span></h1>
            <p>A collection of all my projects spanning web development, IoT, robotics, and AI.</p>
          </ScrollReveal>
        </div>
        <div className="projects-grid" style={{ paddingBottom: 80 }}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.06}>
              <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="glass-card project-card">
                  {project.image && (
                    <div className="project-card-image">
                      <Image src={project.image} alt={project.title} width={400} height={250} />
                    </div>
                  )}
                  <div className="project-card-header">
                    <div className="project-number">Project {project.number}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-tags">
                    {project.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="project-tag more-tag">+{project.techStack.length - 4} more</span>
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
