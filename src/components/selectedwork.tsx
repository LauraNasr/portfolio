import universityLaptop from "../assets/work-university.png";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    id: "university-site",
    title: "University Site",
    description:
      "A university website with a hero section, program overview, campus photo gallery, student testimonials and a contact form.",
    image: universityLaptop,
    tags: ["React", "HTML", "CSS", "JavaScript"],
    live: "https://my-first-project-uni.vercel.app/",
  
  },
];

const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" };

const LINK_CLASS =
  "inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a45c] transition-colors hover:text-[#f1ede2]";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, tags, live, github } = project;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#c9a45c]/20 bg-[#16130f] p-3">
      {/* Image (hover effect only here) */}
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="group relative block overflow-hidden rounded-xl border border-transparent bg-black transition-all duration-500 hover:border-[#c9a45c] hover:shadow-[0_0_35px_-5px_rgba(201,164,92,0.5)]"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-square w-full object-cover object-[center_70%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </a>

      {/* Content */}
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className="text-xl text-[#f1ede2]" style={SERIF}>
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#9a958a]">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/10 px-3 py-1 text-xs font-medium text-[#f1ede2]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-6">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo (opens in a new tab)`}
            className={LINK_CLASS}
          >
            Live Demo <span className="text-xs">↗</span>
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub (opens in a new tab)`}
              className="inline-flex items-center gap-2 text-sm text-[#9a958a] transition-colors hover:text-[#c9a45c]"
            >
              View Code <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="rule-top mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
    >
      <header className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl text-[#f1ede2] sm:text-4xl" style={SERIF}>
            Real Projects. Real Impact.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#9a958a] sm:text-base">
            A selection of projects that showcase my skills in modern web
            development.
          </p>
        </div>

       {/*<a
          href="#work"
          className="inline-flex items-center gap-2 border-b border-[#c9a45c]/50 pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a45c] transition-colors hover:border-[#c9a45c]"
        >
          View all projects <span className="text-xs">→</span>
        </a>*/}
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}