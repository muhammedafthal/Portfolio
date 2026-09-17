import React from "react";
import {
  Code2,
  FileCode,
  Server,
  FileCode2,
  Cpu,
  Network,
  ShieldCheck,
  Layers,
  Atom,
  Layout,
  Workflow,
  Smartphone,
  Database,
  Table,
  HardDrive,
  Terminal,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { GlassCard } from "../common/GlassCard";
import { ScrollReveal } from "../common/ScrollReveal";
import { skillCategories, currentlyExploring } from "../../data/skills";
import "./SkillsSection.css";

// Icon Map
const iconMap = {
  Code2: Code2,
  FileCode: FileCode,
  Server: Server,
  FileCode2: FileCode2,
  Cpu: Cpu,
  Network: Network,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Atom: Atom,
  Layout: Layout,
  Workflow: Workflow,
  Smartphone: Smartphone,
  Database: Database,
  Table: Table,
  HardDrive: HardDrive,
  Terminal: Terminal,
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            tag="Technical Skills"
            title="Core Stack & Engineering Expertise"
            subtitle="Categorized technologies, runtimes, frameworks, and database architectures."
          />
        </ScrollReveal>

        {/* Core Skill Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.category} delay={idx * 100}>
              <GlassCard padding="normal" className="skill-category-card">
                <h3 className="skill-category-title">{cat.category}</h3>
                <p className="skill-category-desc">{cat.description}</p>
                <div className="skill-item-list">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className={`skill-pill ${skill.highlight ? "skill-pill-highlight" : ""}`}
                      >
                        <IconComponent
                          size={16}
                          className={
                            skill.highlight ? "text-accent" : "text-muted"
                          }
                        />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="skill-level-badge">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Currently Exploring Python - Visually Separated Section */}
        <ScrollReveal delay={400} className="exploring-wrapper">
          <GlassCard padding="normal" className="exploring-card">
            <div className="exploring-header">
              <div className="exploring-badge">
                {/* <Sparkles size={16} className="text-accent" /> */}
                <span>* Currently Exploring</span>
              </div>
              <p className="exploring-subtext">
                Technology expanding my engineering toolkit
              </p>
            </div>

            <div className="exploring-grid">
              {currentlyExploring.map((tech) => (
                <div key={tech.name} className="exploring-item">
                  <div className="exploring-icon-box">
                    <Terminal size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="exploring-title-row">
                      <h4>{tech.name}</h4>
                      <span className="exploring-status-tag">
                        {tech.status}
                      </span>
                    </div>
                    <p>{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};
