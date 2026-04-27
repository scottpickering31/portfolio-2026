import { useEffect, useState } from "react";
import { skills } from "./constants/skills";
import { projects } from "./constants/projects";
import { stats } from "./constants/stats";
import headshot from "./assets/scott-pickering-headshot.jpeg";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!expandedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedImage(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expandedImage]);

  return (
    <div className="site-shell">
      <div
        className="parallax-orb orb-one"
        style={{ transform: `translate3d(0, ${scrollY * 0.18}px, 0)` }}
      />
      <div
        className="parallax-orb orb-two"
        style={{ transform: `translate3d(0, ${scrollY * -0.12}px, 0)` }}
      />
      <div
        className="parallax-grid"
        style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
      />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-10 md:pt-12">
        <section className="hero-panel reveal">
          <h1 className="hero-title">
            Building modern product systems that scale from first user to full
            platform.
          </h1>
          <div className="mt-7 flex items-center gap-4">
            <p className="text-4xl">Scott Pickering • Portfolio 2026</p>
          </div>
          <p className="hero-subtitle">
            Full stack engineer delivering clean architecture across web, SaaS,
            and mobile products with performance focused UX.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              Explore Projects
            </a>
            <a className="btn-secondary" href="#stack">
              View Tech Stack
            </a>
          </div>
        </section>

        <section className="about-panel reveal mt-8">
          <p className="caps-line">About Me</p>
          <div className="about-layout mt-5">
            <div className="about-headshot-wrap">
              <img
                src={headshot}
                alt="Scott Pickering headshot"
                className="about-headshot"
              />
            </div>
            <div>
              <div className="about-copy">
                <p className="about-intro">Hi, my name is Scott.</p>
                <p className="about-text">
                  I design and build dependable product systems with a full
                  stack mindset, balancing solid architecture with thoughtful
                  user experience. I enjoy turning complex ideas into clean,
                  scalable solutions that people actually enjoy using.
                </p>

                <p className="about-text">
                  Currently focused on SaaS delivery, scalable platform work,
                  and performance focused interfaces. Most of my time is spent
                  building modern web and mobile applications, always looking
                  for ways to improve reliability, speed, and developer
                  experience.
                </p>

                <p className="about-text">
                  Outside of coding, I'm a guitar player in a family band where
                  music has always been part of life. Whether it's writing code
                  or playing, I enjoy the process of creating something from
                  scratch and refining it until it just feels right.
                </p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <article
                    key={item.label}
                    className="info-tile reveal"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <p className="text-xs tracking-[0.18em] text-slate-300/80 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
              <div>
                <p className="mt-4 text-sm text-slate-300/85 text-center">
                  Open to 2026 software engineering opportunities across
                  frontend, full stack, and product focused teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-12 md:mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="caps-line">Selected Work</p>
              <h2 className="section-heading">Project Highlights</h2>
            </div>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="project-card reveal"
                style={{
                  animationDelay: `${index * 140}ms`,
                  transform: `translate3d(0, ${scrollY * (0.02 + index * 0.01)}px, 0)`,
                }}
              >
                <div
                  className={`project-accent bg-gradient-to-r ${project.accent}`}
                />
                <div className="project-layout">
                  <button
                    className={`project-image-wrap project-image-trigger ${
                      project.imageOrientation === "portrait"
                        ? "project-image-wrap-portrait"
                        : ""
                    }`}
                    type="button"
                    onClick={() =>
                      setExpandedImage({
                        src: project.imageSrc,
                        alt: project.imageAlt,
                      })
                    }
                    aria-label={`Open full screenshot for ${project.name}`}
                  >
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className={`project-image ${
                        project.imageOrientation === "portrait"
                          ? "project-image-portrait"
                          : ""
                      }`}
                      loading="lazy"
                    />
                  </button>
                  <div className="project-content">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="project-status">{project.status}</p>
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-role">{project.role}</p>
                      </div>
                      <div className="project-side">
                        <div className="stack-wrap">
                          {project.stack.map((tech) => (
                            <span key={tech} className="stack-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                    <div className="project-details-row">
                      <ul className="project-points">
                        {project.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="project-actions project-actions-bottom">
                        <a
                          className="project-action-link"
                          href={project.live_href}
                          target="_blank"
                        >
                          View Live
                        </a>
                        <a
                          className="project-action-link"
                          href={project.source_href}
                          target="_blank"
                        >
                          View source code
                        </a>
                        <a
                          className="project-action-link"
                          href={project.readme_href}
                          target="_blank"
                        >
                          View readme.md
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="mt-12 md:mt-16">
          <p className="caps-line">Tooling</p>
          <h2 className="section-heading">Technical Stack</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex min-h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/7 px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/92 p-3 shadow-lg shadow-sky-950/20">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-115"
                  />
                </div>
                <span className="text-sm font-medium text-white/86">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      {expandedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot"
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="image-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="image-lightbox-close"
              type="button"
              onClick={() => setExpandedImage(null)}
              aria-label="Close screenshot"
            >
              X
            </button>
            <img
              className="image-lightbox-image"
              src={expandedImage.src}
              alt={expandedImage.alt}
            />
          </div>
        </div>
      )}
    </div>
  );
}
