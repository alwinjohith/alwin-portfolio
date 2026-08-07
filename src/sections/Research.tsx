"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { research } from "@/lib/data";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeading
        eyebrow="Research"
        title="Exploring the frontier of AI"
        description="Ongoing academic work in machine learning — presented in the style of research publications."
      />

      <div className="mx-auto max-w-3xl">
        {research.map((paper, i) => (
          <motion.article
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-line bg-surface p-6 card-hover hover:shadow-lift hover:border-foreground/20 sm:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-muted">{paper.id}</span>
                <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-foreground">
                  {paper.status}
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted">A. Johith</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {paper.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{paper.abstract}</p>

            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-4">
              {paper.tags.map((tag) => (
                <li key={tag} className="font-mono text-xs text-muted">
                  #{tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
