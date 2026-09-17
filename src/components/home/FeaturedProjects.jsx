// import React from "react";
// import { SectionHeading } from "../common/SectionHeading";
// import { ScrollReveal } from "../common/ScrollReveal";
// import { ProjectCard } from "../projects/ProjectCard";
// import { projects } from "../../data/projects";
// import "./FeaturedProjects.css";

// export const FeaturedProjects = () => {
//   const featuredFullStack = projects.filter(
//     (p) => p.featured && p.category === "Full-Stack Application",
//   );

//   const featuredWebsites = projects.filter(
//     (p) => p.featured && p.category === "Website & Frontend",
//   );

//   return (
//     <section
//       id="projects"
//       className="section-padding featured-projects-section"
//     >
//       <div className="container">
//         <ScrollReveal>
//           <SectionHeading
//             tag="Software Portfolio"
//             title="Featured Engineering Projects"
//             subtitle="Selected work across full-stack applications, backend systems, and modern web experiences."
//           />
//         </ScrollReveal>

//         {/* Full-Stack Applications */}
//         {featuredFullStack.length > 0 && (
//           <div className="projects-category">
//             <div className="projects-category-heading">
//               <span>01</span>
//               <h3>Full-Stack Applications</h3>
//             </div>

//             <div className="projects-grid">
//               {featuredFullStack.map((project, idx) => (
//                 <ScrollReveal key={project.id} delay={idx * 150}>
//                   <ProjectCard project={project} />
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Websites & Frontend */}
//         {featuredWebsites.length > 0 && (
//           <div className="projects-category">
//             <div className="projects-category-heading">
//               <span>02</span>
//               <h3>Websites & Frontend</h3>
//             </div>

//             <div className="projects-grid">
//               {featuredWebsites.map((project, idx) => (
//                 <ScrollReveal key={project.id} delay={idx * 150}>
//                   <ProjectCard project={project} />
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { ScrollReveal } from "../common/ScrollReveal";
import { ProjectCard } from "../projects/ProjectCard";
import { Button } from "../common/Button";
import { projects } from "../../data/projects";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="section-padding featured-projects-section"
    >
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            tag="Software Portfolio"
            title="Featured Engineering Projects"
            subtitle="Selected full-stack applications demonstrating backend architecture, RESTful APIs, authentication, database design, and responsive interfaces."
          />
        </ScrollReveal>

        {/* Featured Full-Stack Projects */}
        <div className="projects-grid">
          {featured.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 150}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* More Frontend Work */}
        <ScrollReveal delay={200}>
          <div className="frontend-projects-cta">
            <div className="frontend-projects-content">
              <span className="frontend-projects-tag">More Frontend Work</span>

              <h3>Websites & Frontend Experiences</h3>

              <p>
                Explore additional responsive websites and frontend experiences
                built with modern web technologies.
              </p>
            </div>

            <Button
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
              href="/projects"
            >
              View Frontend Projects
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
