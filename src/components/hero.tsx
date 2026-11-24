import portrait from "../assets/hero-portrait.jpg";
import { FiDownload } from "react-icons/fi";
//import {FiMail} from "react-icons/fi";
//import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SKILLS = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Git"];
/*
const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/laura-nasr-154219221",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/LauraNasr",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "mailto:lauramehsennasr9@gmail.com",
    label: "Email",
    icon: <FiMail />,
  },
];
*/
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#100f0c] pt-28 text-[#f5f0e6] md:pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-y-8 md:grid-cols-[1.15fr_0.85fr] md:gap-0">
          {/* 1. Title block */}
          <div className="relative z-10 md:col-start-1 md:row-start-1 md:self-end">
            {/* Open to work badge */}
            <span className="mb-6 inline-flex items-center gap-2 border border-[#c9a45d]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8b66e]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9a45d] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9a45d]" />
              </span>
              Open to work
            </span>

            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a45d] md:text-xs">
              Junior Frontend Developer
            </p>

            <h1
              aria-label="Laura Nasr"
              className="select-none font-display text-[17vw] font-medium leading-[0.82] tracking-[-0.055em] text-[#d8b66e] sm:text-[14vw] md:text-[9.5vw] lg:text-[120px] xl:text-[138px]"
            >
              <span className="block">Laura</span>
              <span className="mt-3 block">Nasr</span>
            </h1>
          </div>

          {/* 2. Portrait (under the name on mobile, on the right on desktop) */}
          <div className="relative mx-auto flex w-full max-w-[440px] items-end justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:ml-auto md:max-w-none md:self-center">
            <div className="absolute inset-x-0 top-[15%] h-[65%] rounded-full bg-[#8d6b35]/10 blur-[90px]" />

            <img
              src={portrait}
              alt="Laura Nasr - Junior Frontend Developer"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="animate-fade-up relative z-10 block h-auto w-full max-w-[400px] object-contain [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] md:max-w-[480px] lg:max-w-[530px]"
            />
          </div>

          {/* 3. Description, buttons, socials */}
          <div className="relative z-10 pb-12 md:col-start-1 md:row-start-2 md:self-start md:pb-20 md:pt-10">
            <p className="max-w-[420px] text-sm font-light leading-7 text-[#a9a092]">
              I turn designs into clean, accessible React interfaces. Eager to
              join a team, learn from experienced engineers and grow with every
              project.
            </p>

            {/* Tech stack */}
            <ul className="mt-6 flex max-w-[420px] flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[#c9a45d]/30 bg-[#c9a45d]/10 px-3 py-1 text-xs text-[#f5f0e6]"
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-8 flex md:flex-wrap items-center  gap-x-5 md:gap-x-8 md:gap-y-6">
          

              <a
                href="#work"
                className="group inline-flex items-center gap-6 border-b border-[#c9a45d] pb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8b66e] transition-colors hover:text-[#f5d99a]"
              >
                View My Work
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a45d] text-base transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#c9a45d] group-hover:text-[#100f0c]">
                  →
                </span>
              </a>
                 <a
                href="/Laura-Nasr-CV.pdf"
                download
                className="group inline-flex items-center gap-4 bg-[#c9a45d] px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#100f0c] transition-colors hover:bg-[#d8b66e]"
              >
                Download CV
                <FiDownload className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Social icons */}
           {/* <div className="mt-10 flex items-center gap-4">
              {SOCIALS.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a45d]/50 text-base text-[#d8b66e] transition-all duration-300 hover:border-[#c9a45d] hover:bg-[#c9a45d] hover:text-[#100f0c]"
                  >
                    {s.icon}
                  </a>
                );
              })}
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}