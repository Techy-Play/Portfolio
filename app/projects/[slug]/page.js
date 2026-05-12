import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllSlugs, getOtherProjects } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  
  const ogImage = project.image || "/og-image-1200x630.jpg";
  
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://lokeshpaneru.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = getOtherProjects(slug, 3);

  return (
    <>
      <Navbar />
      <ParticleCanvas />
      <div className="container project-detail">
        <div className="project-detail-header">
          <Link href="/projects" className="back-link">
            <i className="fa-solid fa-arrow-left" /> Back to Projects
          </Link>
          <div className="project-number" style={{ marginBottom: 8 }}>Project {project.number} — {project.category}</div>
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span><i className="fa-regular fa-calendar" /> {project.date}</span>
            <span><i className="fa-solid fa-tag" /> {project.category}</span>
          </div>
          <p className="description">{project.longDescription}</p>

          {/* Action Links */}
          <div className="project-action-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fa-brands fa-github" /> View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Image Carousel — Shopping-app style */}
        {project.images && project.images.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">Gallery</span>
            <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 16 }}>Project <span className="gradient-text">Screenshots</span></h2>
            <div className="glass-card" style={{ padding: 0, overflow: "hidden" }}>
              <ImageCarousel images={project.images} alt={project.title} />
            </div>
          </div>
        )}

        {/* Video Section */}
        {project.videoUrl && (() => {
          const videoSrc = Array.isArray(project.videoUrl) ? project.videoUrl[0] : project.videoUrl;
          const isNativeVideo = videoSrc?.endsWith('.mp4') || videoSrc?.endsWith('.webm');
          
          return (
            <div style={{ marginBottom: 48 }}>
              <span className="section-label">Demo Video</span>
              <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 16 }}>Watch it <span className="gradient-text">in Action</span></h2>
              <div className="glass-card video-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
                {isNativeVideo ? (
                  <video
                    src={videoSrc}
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.image || (project.images && project.images[0])}
                    className="video-iframe"
                    style={{ objectFit: 'cover', width: '100%', display: 'block' }}
                  />
                ) : (
                  <iframe
                    src={videoSrc}
                    title={`${project.title} — Demo Video`}
                    className="video-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          );
        })()}

        {/* CAD Model Section */}
        {project.cadModel && (
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">3D Design</span>
            <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 16 }}>Explore the <span className="gradient-text">CAD Model</span></h2>
            <div className="glass-card" style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(123,47,247,0.1)', border: '1px solid rgba(123,47,247,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <i className="fa-solid fa-cube" style={{ fontSize: '2.5rem', color: 'var(--neon-purple)' }} />
              </div>
              <h3 style={{ marginBottom: 12, fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem' }}>3D CAD Design Available</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 540, lineHeight: 1.7 }}>
                The full 3D CAD design for this robot is available. Since raw <strong>.STEP</strong> files cannot be natively rendered directly in the browser, you can download the 36 MB engineering file below to view and edit it in your preferred CAD software like Fusion 360 or SolidWorks.
              </p>
              
              <a href={project.cadModel.downloadUrl} download className="btn-primary" style={{ padding: '16px 36px' }}>
                <i className="fa-solid fa-download" /> Download .STEP File
              </a>
            </div>
          </div>
        )}

        {/* Live Preview (dark mode) */}
        {(project.liveUrl || project.livePreviewImage) && (
          <div style={{ marginBottom: 48 }}>
            <span className="section-label">Live Preview</span>
            <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 16 }}>See it <span className="gradient-text">in Action</span></h2>
            <div className="glass-card live-preview-wrapper">
              {project.livePreviewImage ? (
                <Image
                  src={project.livePreviewImage}
                  alt={`${project.title} — Live Preview`}
                  width={1200}
                  height={675}
                  quality={100}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius) var(--radius) 0 0" }}
                />
              ) : project.liveUrl ? (
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} — Live Preview`}
                  className="live-preview-iframe"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  style={{ colorScheme: "dark" }}
                />
              ) : null}
              {project.liveUrl && (
                <div className="live-preview-bar">
                  <span><i className="fa-solid fa-globe" /> {project.liveUrl}</span>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Open Full Site
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <span className="section-label">Features</span>
            <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 8 }}>Key <span className="gradient-text">Highlights</span></h2>
            <div className="features-grid">
              {project.features.map((feature, i) => (
                <div key={i} className="glass-card feature-item">
                  <div className="feature-dot" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="tech-stack-section">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 0 }}>Built <span className="gradient-text">With</span></h2>
          <div className="tech-stack-pills">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-stack-pill">{tech}</span>
            ))}
          </div>
        </div>

        {/* OTHER PROJECTS — Recommendations */}
        {otherProjects.length > 0 && (
          <div style={{ paddingTop: 24, paddingBottom: 20 }}>
            <span className="section-label">Explore More</span>
            <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 24 }}>Other <span className="gradient-text">Projects</span></h2>
            <div className="recommend-grid">
              {otherProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="glass-card recommend-card">
                    {p.image && (
                      <div className="recommend-image-wrapper">
                        <Image src={p.image} alt={p.title} width={400} height={250} className="recommend-image" />
                      </div>
                    )}
                    <div className="recommend-info" style={{ padding: p.image ? "16px 20px" : "24px" }}>
                      <div className="project-number" style={{ marginBottom: 8 }}>Project {p.number}</div>
                      <h4>{p.title}</h4>
                      <p style={{ marginBottom: 12 }}>{p.description.substring(0, 100)}...</p>
                      <div className="project-tags" style={{ padding: 0 }}>
                        {p.techStack.slice(0, 4).map((t) => <span key={t} className="project-tag">{t}</span>)}
                        {p.techStack.length > 4 && (
                          <span className="project-tag more-tag">+{p.techStack.length - 4} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div style={{ paddingTop: 24, paddingBottom: 40 }}>
          <Link href="/projects" className="btn-outline"><i className="fa-solid fa-arrow-left" /> All Projects</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
