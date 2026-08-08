export const profile = {
  name: "Alwin Johith",
  role: "Embedded Systems Engineer | Full Stack Developer | AI Enthusiast",
  tagline:
    "Building scalable, intelligent, and efficient systems — from bare-metal firmware to intelligent full-stack applications.",
  email: "alwin.johith@gmail.com",
  linkedin: "https://www.linkedin.com/in/alwin-johith",
  github: "https://github.com/alwin-johith",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export type SkillGroup = {
  title: string;
  icon: "code" | "chip" | "brain" | "layers";
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: "code",
    description: "Core languages across systems, web and scripting.",
    skills: ["Python", "C", "C++", "Embedded C", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    description: "Modern libraries for building scalable web applications.",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Embedded & IoT",
    icon: "chip",
    description: "Firmware, interfacing and connected device development.",
    skills: ["Arduino", "ESP32", "Raspberry Pi", "Sensor Integration", "IoT Prototyping"],
  },
  {
    title: "Tools",
    icon: "layers",
    description: "Day-to-day development and design toolchain.",
    skills: ["Git", "GitHub", "Linux", "Bash", "npm", "Vercel", "Figma", "Photoshop", "GIMP", "Blender"],
  },
  {
    title: "Core",
    icon: "brain",
    description: "Key areas of technical expertise.",
    skills: ["Embedded Systems", "IoT Development", "Web Development", "UI/UX Design", "Automation", "DBMS", "Operating Systems"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: "cpu" | "chip" | "signal" | "terminal" | "brain" | "shield";
  accent: "cyan" | "emerald" | "violet" | "amber" | "fuchsia" | "rose";
};

export const projects: Project[] = [
  {
    title: "Garbage Segregator Bin Level Indicator",
    category: "IoT",
    description:
      "IoT-based smart waste management system with automated segregation and monitoring",
    tech: ["Raspberry Pi Pico", "Embedded C"],
    icon: "chip",
    accent: "emerald",
  },
  {
    title: "Smart Mirror",
    category: "Embedded / IoT",
    description:
      "Interactive mirror displaying real-time information using APIs",
    tech: ["Raspberry Pi", "JavaScript"],
    icon: "cpu",
    accent: "cyan",
  },
  {
    title: "RF Signal Analysis System",
    category: "Signal Processing",
    description:
      "System for analyzing RF signals and wireless communication performance",
    tech: ["Embedded C"],
    icon: "signal",
    accent: "violet",
  },
  {
    title: "Enor & Cradle",
    category: "Systems",
    description:
      "Custom programming language with stack-based virtual machine",
    tech: ["C", "Python"],
    icon: "terminal",
    accent: "amber",
  },
  {
    title: "Chameleon",
    category: "AI Infrastructure",
    description:
      "Stateless AI runtime for dynamic multi-model execution",
    tech: ["Python", "Rust"],
    icon: "brain",
    accent: "fuchsia",
  },
  {
    title: "Anthill",
    category: "Security",
    description:
      "Distributed cybersecurity platform for real-time threat detection",
    tech: ["Rust", "SQLite"],
    icon: "shield",
    accent: "rose",
  },
];

export const research = [
  {
    id: "R-001",
    title: "On Attention Patterns in Transformer Architectures",
    status: "In Progress",
    abstract:
      "Investigating how self-attention evolves across layers in modern transformer models and how attention patterns relate to syntactic and semantic structure in long-context inputs.",
    tags: ["Transformers", "Attention", "NLP", "Deep Learning"],
  },
  {
    id: "R-002",
    title: "Towards Interpretable Neural Networks: A Study on Explainability",
    status: "Ongoing",
    abstract:
      "Exploring saliency methods, attention visualization and feature attribution to make deep learning decisions more transparent, robust and trustworthy.",
    tags: ["Explainable AI", "Neural Networks", "Interpretability"],
  },
];

export const experience = [
  {
    title: "Industrial Intern",
    company: "Salcomp Manufacturing India Pvt. Ltd.",
    period: "Internship",
    description:
      "Worked on electronics manufacturing, production processes, and quality assurance.",
    tags: ["Electronics Manufacturing", "Production", "Quality Assurance"],
  },
  {
    title: "Virtual Intern",
    company: "AdroIT Technologies Innovation Solutions Pvt. Ltd.",
    period: "Internship",
    description:
      "Developed features for a project management web application using modern web technologies.",
    tags: ["Web Development", "Project Management", "Web Technologies"],
  },
];
