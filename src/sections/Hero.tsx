"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const MatrixBackground = dynamic(() => import("@/components/MatrixBackground"), {
  ssr: false,
});

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" aria-hidden="true" />
      <div className="absolute inset-0 mask-fade-edges" aria-hidden="true">
        <MatrixBackground />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 pb-28 text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted"
        >
          Portfolio &mdash; 2026
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Alwin <span className="font-mono font-medium">Johith</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-foreground/80 sm:text-base"
        >
          Embedded Systems Engineer <span className="text-muted">/</span> Full Stack Developer{" "}
          <span className="text-muted">/</span> AI Enthusiast
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#research"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-foreground/80"
          >
            View Research
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-foreground/25 px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-surface-2"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-4 w-px bg-foreground"
          />
        </span>
      </motion.div>
    </section>
  );
}
