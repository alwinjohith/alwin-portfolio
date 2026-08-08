"use client";

import type { ComponentType } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { BrainIcon, ChipIcon, CodeIcon, LayersIcon } from "@/components/icons";
import { skillGroups, type SkillGroup } from "@/lib/data";

const iconMap: Record<SkillGroup["icon"], ComponentType<{ className?: string }>> = {
  code: CodeIcon,
  chip: ChipIcon,
  brain: BrainIcon,
  layers: LayersIcon,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit for every layer of the stack"
        description="From embedded systems to full-stack web development and AI systems."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map(({ title, icon, description, skills }) => {
          const Icon = iconMap[icon];
          return (
            <div
              key={title}
              className="flex h-full flex-col rounded-lg premium-card premium-card-hover p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface-2 text-foreground">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-4 font-medium text-foreground">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>

              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line pt-4">
                {skills.map((skill) => (
                  <li key={skill} className="font-mono text-xs text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
