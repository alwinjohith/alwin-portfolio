"use client";

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
      <div
        className={cn("mx-auto max-w-6xl px-6 lg:px-8", fullBleed && "max-w-none px-0 lg:px-0")}
      >
        {children}
      </div>
    </section>
  );
}
