import React from "react";
import {
  Compass,
  Lightbulb,
  Target,
  Cpu,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { GlassCard } from "../common/GlassCard";
import { ScrollReveal } from "../common/ScrollReveal";
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            tag="About Me"
            title="Building Practical Solutions with Engineering Discipline"
            subtitle="My journey, problem-solving philosophy, and career commitment as a Software Developer."
          />
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal className="about-main-story">
            <GlassCard padding="relaxed">
              <h3 className="about-card-title">
                <Compass className="text-accent" size={24} />
                <span>My Developer Story</span>
              </h3>
              <p>
                My passion for software development stems from a drive to solve
                real-world operational challenges through clean, maintainable
                code. Over the past several years, I have focused on mastering
                full-stack web architectures with a strong emphasis on Node.js
                backend systems and React client applications.
              </p>
              <p>
                Through my hands-on industry internships and project work—such
                as building enterprise Hospital Management Systems and
                high-concurrency Food Delivery Platforms—I have developed a deep
                appreciation for software design principles, API security, and
                database query optimization.
              </p>
              <p>
                I view software development as a balance of robust backend
                engineering, intuitive user experience design, and continuous
                technical growth.
              </p>
            </GlassCard>
          </ScrollReveal>

          <div className="about-side-cards">
            <ScrollReveal delay={150}>
              <GlassCard padding="normal" className="about-mini-card">
                <div className="about-icon-wrapper">
                  <Lightbulb className="text-accent" size={22} />
                </div>
                <div>
                  <h4>Problem-Solving Approach</h4>
                  <p>
                    I break down complex business requirements into modular
                    domain services, verifying backend logic with automated
                    edge-case validation before writing client components.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <GlassCard padding="normal" className="about-mini-card">
                <div className="about-icon-wrapper">
                  <Heart className="text-accent" size={22} />
                </div>
                <div>
                  <h4>What I Enjoy Building</h4>
                  <p>
                    Data-driven web applications, RESTful microservices,
                    role-based security systems, and responsive frontends that
                    provide genuine value to end users.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <GlassCard padding="normal" className="about-mini-card">
                <div className="about-icon-wrapper">
                  <Target className="text-accent" size={22} />
                </div>
                <div>
                  <h4>Career Direction & Mindset</h4>
                  <p>
                    Targeting a Full-Stack or Node.js/Backend Developer role
                    where I can contribute to production codebases, collaborate
                    with engineering teams, and expand into Python ecosystem
                    tooling.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
