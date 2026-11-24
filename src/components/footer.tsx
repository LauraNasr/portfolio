import logo from "../assets/ln-logo-gold-transparent.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/laura-nasr-154219221",
    icon: <FaLinkedinIn />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/LauraNasr",
    icon: <FaGithub />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:lauramehsennasr9@gmail.com",
    icon: <FiMail />,
    external: false,
  },
];

const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" };

const COPYRIGHT_CLASS =
  "text-[11px] uppercase tracking-[0.2em] text-muted-foreground";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-10 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <a href="#top" className="w-fit">
            <img src={logo} alt="Laura Nasr" className="h-14 w-auto" />
          </a>

          <p
            className="max-w-sm text-2xl leading-snug text-foreground"
            style={SERIF}
          >
            Building clean, accessible interfaces with care.
          </p>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Junior frontend developer based in Lebanon, open to joining a team
            and growing with it.
          </p>

          {/* Desktop only */}
          <p className={`hidden lg:block ${COPYRIGHT_CLASS}`}>
            © {year} Laura Nasr
          </p>
        </div>

        {/* Navigate */}
        <nav aria-label="Footer" className="flex flex-col gap-4">
          <span className="label-caps text-primary">Navigate</span>
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="label-caps text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div className="flex flex-col gap-4">
          <span className="label-caps text-primary">Connect</span>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 text-base text-primary transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile only, last thing in the footer */}
      <p className={`px-5 pb-8 text-left lg:hidden ${COPYRIGHT_CLASS}`}>
        © {year} Laura Nasr
      </p>
    </footer>
  );
}