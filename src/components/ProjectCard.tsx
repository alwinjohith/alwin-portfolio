"use client";

import type { ComponentType } from "react";
import type { Project } from "@/lib/data";
import { CpuIcon, ChipIcon, SignalIcon, TerminalIcon, BrainIcon, ShieldIcon } from "@/components/icons";

const iconMap: Record<Project["icon"], ComponentType<{ className?: string }>> = {
  cpu: CpuIcon,
  chip: ChipIcon,
  signal: SignalIcon,
  terminal: TerminalIcon,
  brain: BrainIcon,
  shield: ShieldIcon,
};

const accentMap: Record<Project["accent"], string> = {
  cyan: "border-cyan-500/30 hover:border-cyan-500/50",
  emerald: "border-emerald-500/30 hover:border-emerald-500/50",
  violet: "border-violet-500/30 hover:border-violet-500/50",
  amber: "border-amber-500/30 hover:border-amber-500/50",
  fuchsia: "border-fuchsia-500/30 hover:border-fuchsia-500/50",
  rose: "border-rose-500/30 hover:border-rose-500/50",
};

const iconAccentMap: Record<Project["accent"], string> = {
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
  fuchsia: "text-fuchsia-400",
  rose: "text-rose-400",
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <article
      className={`flex h-full flex-col rounded-lg premium-card premium-card-hover p-6 ${accentMap[project.accent]}`}
    >
      <div className="flex items-center gap-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface-2 ${iconAccentMap[project.accent]}`}>
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-4">
        {project.tech.map((t) => (
          <li key={t} className="font-mono text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
