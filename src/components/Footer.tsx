import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <a href="#home" className="font-mono text-sm font-semibold text-foreground">
          Alwin<span className="text-muted">.dev</span>
        </a>

        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Alwin Johith. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-2">
          {[
            { href: `mailto:${profile.email}`, label: "Email", icon: MailIcon },
            { href: profile.github, label: "GitHub", icon: GithubIcon },
            { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="rounded-md border border-line p-2 text-muted transition-all duration-300 hover:border-foreground hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
