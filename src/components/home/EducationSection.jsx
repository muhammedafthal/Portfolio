import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { GlassCard } from "../common/GlassCard";
import { ScrollReveal } from "../common/ScrollReveal";
import { educationData } from "../../data/education";
import "./EducationSection.css";

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            tag="Academic Foundation"
            title="Education & Technical Degree"
            subtitle="Academic fundamentals in Computer Science and Software Engineering."
          />
        </ScrollReveal>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 150}>
              <GlassCard padding="relaxed" className="education-card">
                <div className="education-header">
                  <div className="education-icon-box">
                    <GraduationCap size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  {/* <span className="education-status-badge">{edu.status}</span> */}
                </div>

                <p className="education-desc">{edu.description}</p>

                <div className="education-highlights">
                  <h4>
                    <BookOpen size={16} className="text-accent" /> Core
                    Highlights & Coursework
                  </h4>
                  <ul>
                    {edu.highlights.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2
                          size={16}
                          className="text-accent flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
