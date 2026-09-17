import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { ProjectHero } from "../components/projects/ProjectHero";
import { CaseStudySection } from "../components/projects/CaseStudySection";
import { Footer } from "../components/layout/Footer";
import { ResumeModal } from "../components/common/ResumeModal";
import { projects } from "../data/projects";
import "./ProjectDetails.css";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | Muhammed Afthal`;
    } else {
      document.title = "Project Not Found | Muhammed Afthal";
    }

    window.scrollTo(0, 0);
  }, [project, projectId]);

  if (!project) {
    return (
      <div className="project-not-found-page">
        <Header onOpenResume={() => setIsResumeModalOpen(true)} />
        <main className="container section-padding text-center">
          <div className="not-found-card glass-card">
            <h2>Project Not Found</h2>
            <p>
              The project case study you requested does not exist or has been
              renamed.
            </p>
            <div className="not-found-actions">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/#projects")}
              >
                View All Projects
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Back Home
              </button>
            </div>
          </div>
        </main>
        <Footer onOpenResume={() => setIsResumeModalOpen(true)} />
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <Header onOpenResume={() => setIsResumeModalOpen(true)} />
      <main>
        <ProjectHero project={project} />
        <CaseStudySection project={project} />
      </main>
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};
