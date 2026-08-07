"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="A trajectory of hands-on learning"
        description="Industry exposure spanning hardware manufacturing and modern web development."
      />

      <div className="mx-auto max-w-3xl">
        <ol className="relative space-y-8 border-l border-line pl-8">
          {experience.map((exp, i) => (
            <motion.li
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                className="absolute -left-[33px] top-2 h-3 w-3 rounded-full border-2 border-foreground bg-background"
                aria-hidden="true"
              />
              <article className="rounded-lg border border-line bg-surface p-6 card-hover hover:shadow-lift hover:border-foreground/20 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold tracking-tight text-foreground">{exp.title}</h3>
                  <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{exp.description}</p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-4">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="font-mono text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
