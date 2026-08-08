"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const intro =
  "I'm Alwin Johith — an engineering student who builds systems that bridge the physical and digital worlds.";

const paragraphs = [
  "My work spans embedded firmware that talks to real-world sensors, AI runtimes that schedule and execute models, and full-stack applications designed for scale. I care about the details — performance, reliability and clean architecture — that separate prototypes from production systems.",
  "I'm driven by problems that demand a holistic view: understanding hardware constraints, writing efficient software, and shipping experiences people actually use.",
];

const focus = [
  { index: "01", title: "Embedded Systems", note: "Bare-metal firmware & RTOS" },
  { index: "02", title: "Artificial Intelligence", note: "Transformers, runtimes, explainability" },
  { index: "03", title: "Internet of Things", note: "Sensor-driven connected products" },
  { index: "04", title: "Full Stack Engineering", note: "Scalable, maintainable web apps" },
];

const stats = [
  { value: "4", label: "Core domains" },
  { value: "2", label: "Internships" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="texture-paper -mx-6 px-6 py-8 sm:-mx-8 sm:px-8 lg:-mx-8 lg:px-8 rounded-lg">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligent systems, end to end"
          description="An engineering student building scalable, intelligent and efficient systems."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl">
            {intro}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Currently focused on
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {focus.map((f) => (
              <li key={f.index} className="group flex items-baseline gap-4 py-4">
                <span className="font-mono text-xs text-muted">{f.index}</span>
                <span className="flex-1">
                  <span className="block font-medium text-foreground">{f.title}</span>
                  <span className="block text-sm text-muted">{f.note}</span>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground" />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </div>
    </SectionWrapper>
  );
}
