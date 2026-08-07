"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { ArrowRightIcon, BrainIcon, ChipIcon, CpuIcon, ShieldIcon, SignalIcon, TerminalIcon } from "./icons";
import type { Project } from "@/lib/data";

const iconMap: Record<Project["icon"], ComponentType<{ className?: string }>> = {
  cpu: CpuIcon,
  chip: ChipIcon,
  signal: SignalIcon,
  terminal: TerminalIcon,
  brain: BrainIcon,
  shield: ShieldIcon,
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 card-hover hover:shadow-lift hover:border-foreground/20"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface-2 text-foreground">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-[11px] text-muted">
              {t}
            </li>
          ))}
        </ul>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read more <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.article>
  );
}
