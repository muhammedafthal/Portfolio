import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { IconGithub } from "../common/Icons";
import { GlassCard } from "../common/GlassCard";
import "./ProjectCard.css";

export const ProjectCard = ({ project }) => {
  return (
    <GlassCard padding="none" className="project-card">
      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
        <div className="project-card-category-overlay">
          <span>{project.category}</span>
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>

        <p className="project-card-desc">{project.shortDescription}</p>

        <div className="project-card-tech-list">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="project-tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="project-tech-badge project-tech-more">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="project-card-footer">
          <Link to={`/projects/${project.id}`} className="case-study-link">
            <span>View Case Study</span>
            <ArrowRight size={16} />
          </Link>

          <div className="project-card-external-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub Repository for ${project.title}`}
                className="icon-link"
              >
                <IconGithub size={18} />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo for ${project.title}`}
                className="icon-link"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
