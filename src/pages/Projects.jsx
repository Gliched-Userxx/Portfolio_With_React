import React from "react";
import SheetHeader from "../components/SheetHeader";
import TitleBlock from "../components/TitleBlock";
import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <SheetHeader num="02" eyebrow="Sheet 02 — Plan View" title="Projects" />

      <p className="projects-intro">
        A handful of things I've shipped recently — each built end to end,
        from schema to UI. Details and links below.
      </p>

      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-card">
            <div className="project-card-head">
              <span className="project-card-code">{project.code}</span>
              <h2 className="project-card-name">{project.name}</h2>
            </div>

            <p className="project-card-summary">{project.summary}</p>

            <ul className="project-card-stack" aria-label="Technologies used">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="project-card-links">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live demo ↗
                </a>
              )}
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                Source code ↗
              </a>
            </div>
          </li>
        ))}
      </ul>

      <TitleBlock sheetNum="02" sheetTitle="Projects" />
    </section>
  );
}
