import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { IconGithub } from "../common/Icons";
import { Button } from "../common/Button";
import "./ProjectHero.css";

export const ProjectHero = ({ project }) => {
  return (
    <section className="project-hero-section">
      <div className="container">
        <div className="project-breadcrumbs">
          <Link to="/#projects" className="breadcrumb-link">
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>

        <div className="project-hero-content">
          <span className="label-badge project-hero-category">
            {project.category}
          </span>
          <h1 className="project-hero-title">{project.title}</h1>
          <p className="project-hero-tagline">
            {project.caseStudy?.tagline || project.shortDescription}
          </p>

          <div className="project-hero-tech-badges">
            {project.technologies.map((tech) => (
              <span key={tech} className="hero-tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-hero-ctas">
            {project.github && (
              <Button
                variant="primary"
                icon={IconGithub}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </Button>
            )}
            {project.liveDemo && (
              <Button
                variant="secondary"
                icon={ExternalLink}
                iconPosition="right"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
