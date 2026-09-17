import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { GlassCard } from "../common/GlassCard";
import { ScrollReveal } from "../common/ScrollReveal";
import { experiences } from "../../data/experience";
import "./ExperienceSection.css";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            tag="Professional Track"
            title="Software Development Experience"
            subtitle="Hands-on industry experience building full-stack applications, API middleware, and database schemas."
          />
        </ScrollReveal>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 150}>
              <GlassCard padding="relaxed" className="experience-card">
                <div className="experience-card-header">
                  <div className="experience-role-group">
                    <div className="role-icon-box">
                      <Briefcase size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="experience-meta-tags">
                    <span
                      className={`status-tag ${exp.isCurrent ? "status-tag-current" : ""}`}
                    >
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="location-tag">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="experience-desc">{exp.description}</p>

                <div className="experience-responsibilities">
                  <h4>Key Contributions & Deliverables:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>
                        <CheckCircle2
                          size={16}
                          className="text-accent flex-shrink-0"
                        />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tech-stack">
                  <span className="tech-stack-label">Technologies:</span>
                  <div className="tech-pills-row">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="exp-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
