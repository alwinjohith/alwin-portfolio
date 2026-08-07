"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { CheckIcon, SendIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/alwin-johith", href: profile.linkedin },
  { label: "GitHub", value: "@alwin-johith", href: profile.github },
];

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = { name: "", email: "", message: "" };

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Please enter a message.";
  else if (form.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const setField = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
      window.setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to internships, collaborations and interesting engineering problems. I usually reply within a day."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <ul className="divide-y divide-line border-y border-line">
            {channels.map(({ label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 py-5 transition-colors duration-200"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">{label}</span>
                    <span className="font-mono text-sm text-foreground">{value}</span>
                  </span>
                  <span className="text-xs text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden="true" />
            Usually responds within 24 hours
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-line bg-surface p-6 shadow-soft sm:p-8"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className={cn("input-neon", errors.name && "input-error")}
                />
                {errors.name ? <p className="mt-1.5 text-xs text-red-700">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="ada@example.com"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={cn("input-neon", errors.email && "input-error")}
                />
                {errors.email ? <p className="mt-1.5 text-xs text-red-700">{errors.email}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                className={cn("input-neon resize-none", errors.message && "input-error")}
              />
              {errors.message ? <p className="mt-1.5 text-xs text-red-700">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={cn(
                "group inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium transition-all duration-300",
                status === "sent"
                  ? "bg-foreground text-white"
                  : "bg-primary text-white hover:bg-foreground/80 disabled:cursor-not-allowed disabled:opacity-60"
              )}
            >
              {status === "sent" ? (
                <>
                  <CheckIcon className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send message
                  <SendIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
