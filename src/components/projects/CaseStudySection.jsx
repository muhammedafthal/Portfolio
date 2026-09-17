import React from "react";
import {
  Target,
  AlertCircle,
  Lightbulb,
  Users,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Wrench,
  BookOpen,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "../common/GlassCard";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { CodeSnippet } from "./CodeSnippet";
import "./CaseStudySection.css";

export const CaseStudySection = ({ project }) => {
  const cs = project.caseStudy;
  if (!cs) return null;

  return (
    <div className="case-study-container container">
      {/* 1. Overview & Business Need */}
      <section className="case-study-block">
        <GlassCard padding="relaxed">
          <div className="block-title-row">
            <Target className="text-accent" size={24} />
            <h2>Project Overview & Objective</h2>
          </div>
          <p className="case-study-lead">{cs.overview}</p>
          <div className="objective-box">
            <strong>Core Objective:</strong> {cs.objective}
          </div>
        </GlassCard>
      </section>

      {/* 2. Problem vs Solution */}
      <section className="case-study-block">
        <div className="problem-solution-grid">
          <GlassCard padding="normal" className="problem-card">
            <div className="block-title-row">
              <AlertCircle className="text-error" size={22} />
              <h3>The Challenge / Business Problem</h3>
            </div>
            <p>{cs.problem}</p>
          </GlassCard>

          <GlassCard padding="normal" className="solution-card">
            <div className="block-title-row">
              <Lightbulb className="text-accent" size={22} />
              <h3>The Engineering Solution</h3>
            </div>
            <p>{cs.solution}</p>
          </GlassCard>
        </div>
      </section>

      {/* 3. User Roles Access Matrix */}
      {cs.userRoles && cs.userRoles.length > 0 && (
        <section className="case-study-block">
          <GlassCard padding="relaxed">
            <div className="block-title-row">
              <Users className="text-accent" size={24} />
              <h2>System User Roles & Privilege Matrix</h2>
            </div>
            <div className="user-roles-grid">
              {cs.userRoles.map((ur) => (
                <div key={ur.role} className="role-card">
                  <span className="role-name">{ur.role}</span>
                  <p className="role-access">{ur.access}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>
      )}

      {/* 4. Key Features */}
      {cs.keyFeatures && cs.keyFeatures.length > 0 && (
        <section className="case-study-block">
          <GlassCard padding="relaxed">
            <div className="block-title-row">
              <CheckCircle2 className="text-accent" size={24} />
              <h2>Key System Capabilities & Features</h2>
            </div>
            <ul className="features-checklist">
              {cs.keyFeatures.map((feature, i) => (
                <li key={i}>
                  <CheckCircle2
                    size={18}
                    className="text-accent flex-shrink-0"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </section>
      )}

      {/* 5. System Architecture & Diagram */}
      <section className="case-study-block">
        <ArchitectureDiagram title={`${project.title} — System Architecture`} />

        {cs.architecture && (
          <GlassCard padding="relaxed" className="arch-details-card">
            <div className="block-title-row">
              <Cpu className="text-accent" size={22} />
              <h3>Architecture Layer Breakdown</h3>
            </div>
            <div className="arch-layers-grid">
              <div className="arch-layer-item">
                <h4>Frontend Architecture</h4>
                <p>{cs.architecture.frontend}</p>
              </div>
              <div className="arch-layer-item">
                <h4>Backend Architecture</h4>
                <p>{cs.architecture.backend}</p>
              </div>
              <div className="arch-layer-item">
                <h4>Database Design</h4>
                <p>{cs.architecture.database}</p>
              </div>
              <div className="arch-layer-item">
                <h4>Security & Protection</h4>
                <p>{cs.architecture.security}</p>
              </div>
            </div>
          </GlassCard>
        )}
      </section>

      {/* 6. Important Technical Decisions */}
      {cs.technicalDecisions && cs.technicalDecisions.length > 0 && (
        <section className="case-study-block">
          <GlassCard padding="relaxed">
            <div className="block-title-row">
              <ShieldCheck className="text-accent" size={24} />
              <h2>Key Technical Architecture Rationale</h2>
            </div>
            <div className="tech-decisions-list">
              {cs.technicalDecisions.map((td, i) => (
                <div key={i} className="decision-item">
                  <h4>{td.decision}</h4>
                  <p>
                    <strong>Rationale:</strong> {td.rationale}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>
      )}

      {/* 7. Code Snippets */}
      {cs.codeSnippets && cs.codeSnippets.length > 0 && (
        <section className="case-study-block">
          <div className="block-title-row">
            <Wrench className="text-accent" size={24} />
            <h2>Selected Code Snippets & Middleware</h2>
          </div>
          {cs.codeSnippets.map((snippet, idx) => (
            <CodeSnippet
              key={idx}
              title={snippet.title}
              language={snippet.language}
              description={snippet.description}
              code={snippet.code}
            />
          ))}
        </section>
      )}

      {/* 8. Challenges & Solutions */}
      {cs.challenges && cs.challenges.length > 0 && (
        <section className="case-study-block">
          <GlassCard padding="relaxed">
            <div className="block-title-row">
              <Wrench className="text-accent" size={24} />
              <h2>Engineering Challenges & Solutions</h2>
            </div>
            <div className="challenges-list">
              {cs.challenges.map((c, i) => (
                <div key={i} className="challenge-item">
                  <h4>{c.challenge}</h4>
                  <p className="challenge-desc">
                    <strong>Problem:</strong> {c.description}
                  </p>
                  <p className="challenge-solution">
                    <CheckCircle2
                      size={16}
                      className="text-accent flex-shrink-0"
                    />
                    <span>
                      <strong>Solution:</strong> {c.solution}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>
      )}

      {/* 9. Lessons Learned & Future Roadmap */}
      <section className="case-study-block">
        <div className="lessons-roadmap-grid">
          {cs.lessonsLearned && (
            <GlassCard padding="normal" className="lessons-card">
              <div className="block-title-row">
                <BookOpen className="text-accent" size={22} />
                <h3>Engineering Lessons Learned</h3>
              </div>
              <ul className="lessons-list">
                {cs.lessonsLearned.map((lesson, i) => (
                  <li key={i}>
                    <ArrowRight
                      size={16}
                      className="text-accent flex-shrink-0"
                    />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}

          {cs.futureImprovements && (
            <GlassCard padding="normal" className="roadmap-card">
              <div className="block-title-row">
                <Rocket className="text-accent" size={22} />
                <h3>Future Improvements Roadmap</h3>
              </div>
              <ul className="roadmap-list">
                {cs.futureImprovements.map((imp, i) => (
                  <li key={i}>
                    <CheckCircle2
                      size={16}
                      className="text-muted flex-shrink-0"
                    />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}
        </div>
      </section>
    </div>
  );
};
