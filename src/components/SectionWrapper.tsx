"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  fullBleed?: boolean;
};

export default function SectionWrapper({
  id,
  className = "",
  children,
  fullBleed = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-24 sm:py-32", className)}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={cn("mx-auto max-w-6xl px-6 lg:px-8", fullBleed && "max-w-none px-0 lg:px-0")}
      >
        {children}
      </motion.div>
    </section>
  );
}
