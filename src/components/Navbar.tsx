"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { useScrolled } from "@/hooks/useScrolled";
import { CloseIcon, MenuIcon } from "./icons";

export default function Navbar() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full border-b bg-background transition-shadow duration-300 ${
        scrolled ? "border-line shadow-soft" : "border-line/60"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          Alwin<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-muted transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-foreground/80 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-line p-2 text-foreground md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-line bg-background md:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="block rounded-md bg-primary px-3 py-2.5 text-center text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
