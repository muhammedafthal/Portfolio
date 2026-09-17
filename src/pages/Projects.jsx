import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { IconGithub } from "../components/common/Icons";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { projects } from "../data/projects";
import "./Projects.css";

export const Projects = () => {
  const frontendProjects = projects.filter(
    (project) => project.category === "Website & Frontend",
  );

  return (
    <main className="projects-page">
      <section className="projects-page-header">
        <div className="container">
          <Link to="/#projects" className="breadcrumb-link">
            <ArrowLeft />
            Featured Projects
          </Link>
          <ScrollReveal>
            <SectionHeading
              tag="Frontend Portfolio"
              title="Web & Frontend Projects"
              subtitle="A selection of responsive websites and frontend experiences focused on modern design, usability, and thoughtful user experiences."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="frontend-projects-list">
        <div className="container">
          <div className="frontend-projects-grid">
            {frontendProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <article className="frontend-project-card">
                  <div className="frontend-project-image">
                    <img src={project.image} alt={`${project.title} preview`} />
                  </div>

                  <div className="frontend-project-content">
                    <span className="frontend-project-category">
                      {project.category}
                    </span>

                    <h2>{project.title}</h2>

                    <p>{project.shortDescription}</p>

                    <div className="frontend-project-tech">
                      {project.technologies?.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="frontend-project-actions">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="frontend-project-link"
                        >
                          Live Website
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="frontend-project-link secondary"
                        >
                          GitHub
                          <IconGithub size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
