import React from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/home/Hero";
import { AboutSection } from "../components/home/AboutSection";
import { SkillsSection } from "../components/home/SkillsSection";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { ExperienceSection } from "../components/home/ExperienceSection";
import { EducationSection } from "../components/home/EducationSection";
import { ContactSection } from "../components/home/ContactSection";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
  const openResume = () => {
    window.open("/resume/resume-muhammed-afthal-k.pdf", "_blank");
  };

  return (
    <div className="home-page">
      <Header onOpenResume={openResume} />

      <main>
        <Hero onOpenResume={openResume} />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjects />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer onOpenResume={openResume} />
    </div>
  );
};
