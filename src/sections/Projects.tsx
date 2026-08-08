"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, engineered for impact"
        description="A portfolio of systems spanning embedded firmware, IoT, AI, and full-stack development."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
