import {
  LuGlobe,
  LuLayoutGrid,
  LuBraces,
  LuCode,
  LuGithub,
  LuMousePointerClick,
  LuGauge,
  LuSearch,
  LuServer,
  LuImage,
  LuPalette,
} from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import type { ReactNode } from "react";

type Skill = { name: string; icon: ReactNode };

const skills: Skill[] = [
  // Technologies
  { name: "HTML5", icon: <LuGlobe /> },
  { name: "CSS3", icon: <LuLayoutGrid /> },
  { name: "JavaScript", icon: <LuBraces /> },
  { name: "React", icon: <LuCode /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git & GitHub", icon: <LuGithub /> },
  // Skills & tools
  { name: "Responsive Design", icon: <LuMousePointerClick /> },
  { name: "SEO", icon: <LuGauge /> },
  { name: "Search Console", icon: <LuSearch /> },
  { name: "FTP (FileZilla)", icon: <LuServer /> },
  { name: "Photoshop", icon: <LuImage /> },
  { name: "Canva", icon: <LuPalette /> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="rule-top mx-auto max-w-7xl scroll-mt-20 px-5 py-10 md:px-8 md:py-24 text-[#e8e4d8] "
    >
      <div className=" flex flex-col gap-3  mb-8 md:mb-16">
        <span className="label-caps text-[#c9a45c]">Toolkit</span>
        <h2
          className="text-2xl text-[#f1ede2] md:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Skills & Tools
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-[#9a958a] sm:text-base">
          Technologies and tools I use to build, optimize and ship modern websites.
        </p>
      </div>

   <ul className="grid grid-cols-3 md:flex md:flex-wrap gap-4">
        {skills.map((s) => (
          <li
            key={s.name}
            className="flex h-28 w-28 flex-col items-center justify-center gap-3 border border-[#2a2823] bg-[#14130f] px-2 text-center transition hover:border-[#c9a45c]/60"
          >
            <span aria-hidden="true" className="text-2xl text-[#c9a45c]">
              {s.icon}
            </span>
            <span className="text-[11px] uppercase leading-tight tracking-[0.14em] text-[#c9b27a]">
              {s.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}