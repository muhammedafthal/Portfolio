import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ResumeModal } from "../components/common/ResumeModal";
import { Button } from "../components/common/Button";
import { ArrowLeft, Home as HomeIcon } from "lucide-react";
import "./NotFound.css";

export const NotFound = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="not-found-page">
      <Header onOpenResume={() => setIsResumeModalOpen(true)} />
      <main className="container section-padding not-found-container">
        <div className="not-found-badge">404 Error</div>
        <h1>Page Not Found</h1>
        <p className="not-found-desc">
          The page or route you requested does not exist or has been relocated.
        </p>
        <div className="not-found-buttons">
          <Button variant="primary" icon={HomeIcon} href="/">
            Back to Home
          </Button>
          <Button variant="secondary" icon={ArrowLeft} href="/#projects">
            View Projects
          </Button>
        </div>
      </main>
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};
