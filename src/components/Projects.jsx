import { CalendarBlank, FileArrowDown } from "@phosphor-icons/react";
import { profile, projects } from "../data/content";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            A few projects where I took an idea from raw data or an empty repo to something working end-to-end.{" "}
            <a href={profile.resumeHref} download className="projects__resume-link">
              <FileArrowDown size={14} weight="bold" aria-hidden="true" />
              Full breakdowns in my resume
            </a>
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal as="article" className="project-card card" key={project.name} delay={i * 90}>
              <div className="project-card__date">
                <CalendarBlank size={14} weight="bold" aria-hidden="true" />
                {project.date}
              </div>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
