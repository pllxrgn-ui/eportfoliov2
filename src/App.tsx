import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  certificates,
  experience,
  heroStats,
  profile,
  projects,
} from "./data/portfolio";
import type { Certificate } from "./data/portfolio";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SkillCarousel } from "./components/SkillCarousel";
import { usePortfolioMotion } from "./hooks/usePortfolioMotion";

const navigationItems = ["Work", "Experience", "Skills", "Credentials", "Contact"];
const INITIAL_CERTIFICATE_COUNT = 10;
const heroAvatar = `${import.meta.env.BASE_URL}images/hero-avatar.webp`;

const isImageCredential = (href?: string) => /\.(png|jpe?g|webp|gif)$/i.test(href ?? "");

function App() {
  const motionScopeRef = usePortfolioMotion();
  const [selectedCredential, setSelectedCredential] = useState<Certificate | null>(null);
  const [showAllCredentials, setShowAllCredentials] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sortedCertificates = useMemo(
    () => [...certificates].sort((first, second) => second.dateValue.localeCompare(first.dateValue)),
    [],
  );
  const visibleCertificates = showAllCredentials
    ? sortedCertificates
    : sortedCertificates.slice(0, INITIAL_CERTIFICATE_COUNT);
  const credentialPreviewTitle = useMemo(
    () => selectedCredential ? `${selectedCredential.title} certificate preview` : undefined,
    [selectedCredential],
  );

  useEffect(() => {
    if (!selectedCredential) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCredential(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCredential]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 640);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AnimatedBackground />
      <div className="site-shell" ref={motionScopeRef}>
        <header className="site-header" aria-label="Main navigation">
          <a className="brand-mark" href="#top" aria-label="Go to top">
            <span>PV</span>
          </a>
          <nav>
            {navigationItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main id="main">
          <section className="hero-section" id="top">
            <div className="hero-copy">
              <p className="eyebrow hero-kicker">
                <Sparkles size={16} aria-hidden="true" />
                Portfolio / Full-stack / AI-assisted systems
              </p>
              <h1 aria-label={profile.name}>
                <span className="hero-title-mask">
                  <span className="hero-title-line type-line">Pol Danyael</span>
                </span>
                <span className="hero-title-mask">
                  <span className="hero-title-line type-line">Villorente</span>
                </span>
              </h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-actions" aria-label="Primary contact actions">
                <a className="button primary" href={`mailto:${profile.email}`}>
                  <Mail size={18} aria-hidden="true" />
                  Email me
                </a>
                <a className="button secondary" href={profile.resumeHref} download>
                  <Download size={18} aria-hidden="true" />
                  Download resume
                </a>
                <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} aria-hidden="true" />
                  LinkedIn
                </a>
                <a className="button secondary" href={profile.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookF size={17} aria-hidden="true" />
                  Facebook
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Profile highlights">
              <div className="panel-topline">
                <img src={heroAvatar} alt="Stylized hoodie avatar of Pol Danyael" />
                <span>Available for software, UI, and operations-focused work</span>
              </div>
              <div className="profile-card">
                <div>
                  <span className="profile-label">Based in</span>
                  <strong>{profile.location}</strong>
                </div>
                <MapPin size={22} aria-hidden="true" />
              </div>
              <div className="stat-grid">
                {heroStats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="section" id="work">
            <div className="section-heading motion-reveal">
              <p className="eyebrow">
                <BriefcaseBusiness size={16} aria-hidden="true" />
                Selected work
              </p>
              <h2 className="type-heading">
                <span className="type-line">Systems built around operations,</span>
                <span className="type-line">AI, and practical workflows.</span>
              </h2>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-body">
                    <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                    <div className="project-copy">
                      <p className="project-year">{project.year}</p>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <p className="impact">{project.impact}</p>
                    </div>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                      <span className="sr-only">{project.title}: </span>
                      View project
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section split-section" id="experience">
            <div className="section-heading sticky-heading motion-reveal">
              <p className="eyebrow">
                <GraduationCap size={16} aria-hidden="true" />
                Background
              </p>
              <h2 className="type-heading">
                <span className="type-line">Computer science foundation</span>
                <span className="type-line">with hands-on operations experience.</span>
              </h2>
              <p>
                Bachelor of Science in Computer Science at Mapua Malayan Colleges Mindanao,
                2022 - 2026.
              </p>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.company}`}>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="skills">
            <div className="section-heading motion-reveal">
              <p className="eyebrow">
                <Code2 size={16} aria-hidden="true" />
                Skill stack
              </p>
              <h2 className="type-heading">
                <span className="type-line">A practical toolkit for full-stack builds,</span>
                <span className="type-line">AI experiments, and interface design.</span>
              </h2>
            </div>

            <SkillCarousel />
          </section>

          <section className="section" id="credentials">
            <div className="section-heading motion-reveal">
              <p className="eyebrow">
                <Award size={16} aria-hidden="true" />
                Credentials
              </p>
              <h2 className="type-heading">
                <span className="type-line">Certifications across AI, software,</span>
                <span className="type-line">systems, and agile practice.</span>
              </h2>
            </div>

            <div className="credential-toolbar">
              <p>
                Showing {visibleCertificates.length} of {sortedCertificates.length} credentials,
                ordered newest to oldest.
              </p>
              <button type="button" onClick={() => setShowAllCredentials((current) => !current)}>
                {showAllCredentials ? "Show fewer" : "View all credentials"}
              </button>
            </div>

            <div className="credential-list">
              {visibleCertificates.map((certificate) => (
                <button
                  type="button"
                  className="credential-row"
                  key={`${certificate.title}-${certificate.href}`}
                  onClick={() => setSelectedCredential(certificate)}
                >
                  <span className="credential-category">{certificate.category}</span>
                  <span className="credential-main">
                    <strong>{certificate.title}</strong>
                    <small>{certificate.issuer}</small>
                  </span>
                  <time>{certificate.date}</time>
                </button>
              ))}
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="type-heading">
                <span className="type-line">Let's build something practical,</span>
                <span className="type-line">polished, and useful.</span>
              </h2>
            </div>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
                <Phone size={18} aria-hidden="true" />
                {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn profile
              </a>
              <a href={profile.resumeHref} download>
                <Download size={18} aria-hidden="true" />
                Download resume
              </a>
              <a href={profile.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF size={17} aria-hidden="true" />
                Facebook profile
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div>
            <strong>{profile.name}</strong>
            <p>© 2026. All rights reserved.</p>
          </div>
          <p>
            Built with React, TypeScript, Vite, GSAP, and Lenis. Designed as a fast,
            responsive portfolio with local certificate previews.
          </p>
        </footer>
      </div>

      {selectedCredential ? (
        <div
          className="credential-modal"
          role="dialog"
          aria-modal="true"
          aria-label={credentialPreviewTitle}
        >
          <button
            type="button"
            className="credential-modal-backdrop"
            aria-label="Close credential preview"
            onClick={() => setSelectedCredential(null)}
          />
          <div className="credential-modal-panel">
            <div className="credential-modal-header">
              <div>
                <span className="credential-category credential-modal-category">
                  {selectedCredential.category}
                </span>
                <h3>{selectedCredential.title}</h3>
                <p>
                  {selectedCredential.issuer} / {selectedCredential.date}
                </p>
              </div>
              <div className="credential-modal-actions">
                {selectedCredential.href ? (
                  <a href={selectedCredential.href} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} aria-hidden="true" />
                    Open file
                  </a>
                ) : null}
                <button
                  type="button"
                  aria-label="Close credential preview"
                  onClick={() => setSelectedCredential(null)}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="credential-preview">
              {selectedCredential.href ? (
                isImageCredential(selectedCredential.href) ? (
                  <img src={selectedCredential.href} alt={`${selectedCredential.title} certificate`} />
                ) : (
                  <iframe
                    title={credentialPreviewTitle}
                    src={`${selectedCredential.href}#toolbar=0&navpanes=0`}
                  />
                )
              ) : (
                <p>Certificate preview is unavailable.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <a
        className={`back-to-top${showBackToTop ? " visible" : ""}`}
        href="#top"
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <ArrowUp size={20} aria-hidden="true" />
        <span className="sr-only">Back to top</span>
      </a>
    </>
  );
}

export default App;
