// src/components/Experience.tsx
// Dark/gold timeline built from the LinkedIn profile.
// Dates and degree names follow LinkedIn: make sure your CV says the same.

type TimelineItem = {
  period: string;
  title: string;
  place: string;
  points?: string[];
};

const experience: TimelineItem[] = [
  {
    period: "Feb 2026 - Present",
    title: "Frontend Developer",
    place: "in2info, Beirut",
    points: [
      "Develop responsive, user-friendly websites and web applications with React.js.",
      "Turn designs into pixel-perfect, mobile-friendly interfaces.",
      "Apply on-page SEO best practices (meta tags, headings, alt text, page speed) and run keyword research to improve search visibility.",
      "Monitor website performance with Google Search Console and prepare SEO reports.",
      "Deploy and maintain websites on servers via FTP (FileZilla) and create visual assets with Photoshop and Canva.",
    ],
  },
  {
    period: "Dec 2021 - Mar 2022",
    title: "Frontend Developer",
    place: "BEA Technology Company, Tripoli",
    points: [
      "Built responsive web pages with HTML, CSS and JavaScript, turning designs into layouts that work across desktop and mobile.",
    ],
  },
];

const education: TimelineItem[] = [
  {
    period: "Aug 2024 - Sep 2024",
    title: "Web Development Courses",
    place: "CSS, Bootstrap and JavaScript",
  },
  {
    period: "Nov 2022 - Nov 2023",
    title: "Master's Degree in Computer Science",
    place: "Lebanese University, Faculty of Sciences",
  },
  {
    period: "Aug 2021",
    title: "CCNA 1: Introduction to Networks",
    place: "Cisco Network Associate",
  },
  {
    period: "Jan 2018 - Jan 2021",
    title: "Bachelor's Degree in Computer Science",
    place: "Lebanese University, Faculty of Sciences",
  },
];

function Timeline({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="font-['Playfair_Display',serif] text-xl md:text-2xl text-[#f3ece0]">{heading}</h3>

      <ol className="mt-8 border-l border-[#d4a95a]/30">
        {items.map((item) => (
          <li key={`${item.period}-${item.title}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-1.25 top-1.75 h-2.25 w-2.25 rounded-full bg-[#d4a95a]"
            />

            <p className="  text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a95a]">
              {item.period}
            </p>
            <h4 className="mt-2 font-['Playfair_Display',serif] text-lg md:text-xl text-[#f3ece0]">
              {item.title}
            </h4>
            <p className="mt-1 text-sm text-[#a89f90]">{item.place}</p>

            {item.points && item.points.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-sm leading-relaxed text-[#b3aa9a] before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-[#d4a95a]/60"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="rule-top mx-auto max-w-7xl scroll-mt-20 px-5 py-10 md:px-8 md:py-24"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4a95a]">
        Background
      </p>
      <h2 className="mt-3 font-['Playfair_Display',serif] text-2xl md:text-4xl text-[#f3ece0]">
        Experience &amp; Education
      </h2>
      <p className="mt-3 max-w-xl text-[#a89f90]">Where I have worked and studied.</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-24">
        <Timeline heading="Experience" items={experience} />
        <Timeline heading="Education" items={education} />
      </div>
    </section>
  );
}