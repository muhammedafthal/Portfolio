export const skillCategories = [
  {
    category: "Languages & Runtimes",
    description:
      "Core programming languages and asynchronous runtime environments used to build robust applications.",
    skills: [
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        icon: "Code2",
        highlight: true,
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        icon: "FileCode",
        highlight: true,
      },
      { name: "Node.js", level: "Advanced", icon: "Server", highlight: true },
      {
        name: "PHP",
        level: "Intermediate",
        icon: "FileCode2",
        highlight: false,
      },
    ],
  },
  {
    category: "Backend & Frameworks",
    description:
      "Server-side web frameworks, REST API design, authentication, and backend middleware logic.",
    skills: [
      { name: "Express.js", level: "Advanced", icon: "Cpu", highlight: true },
      {
        name: "RESTful APIs",
        level: "Advanced",
        icon: "Network",
        highlight: true,
      },
      {
        name: "JWT & Auth Middleware",
        level: "Advanced",
        icon: "ShieldCheck",
        highlight: true,
      },
      {
        name: "MVC Architecture",
        level: "Advanced",
        icon: "Layers",
        highlight: false,
      },
    ],
  },
  {
    category: "Frontend Development",
    description:
      "Building responsive, modern, component-driven user interfaces with state management.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom", highlight: true },
      {
        name: "HTML5 / Modern CSS",
        level: "Advanced",
        icon: "Layout",
        highlight: true,
      },
      {
        name: "State Management",
        level: "Intermediate",
        icon: "Workflow",
        highlight: false,
      },
      {
        name: "Responsive Design",
        level: "Advanced",
        icon: "Smartphone",
        highlight: false,
      },
    ],
  },
  {
    category: "Databases & Storage",
    description:
      "Relational and NoSQL database modeling, query design, and data persistence.",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database", highlight: true },
      { name: "MySQL", level: "Intermediate", icon: "Table", highlight: true },
      {
        name: "SQL",
        level: "Intermediate",
        icon: "HardDrive",
        highlight: false,
      },
    ],
  },
];

export const currentlyExploring = [
  {
    name: "Python",
    status: "Actively Learning & Exploring",
    description:
      "Diving into Python scripting, data structures, and backend frameworks (FastAPI fundamentals).",
    icon: "Terminal",
    progress: "Exploring",
  },
];
