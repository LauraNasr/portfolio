const SERVICES = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Fast, accessible web applications built with React, TypeScript, and modern tooling.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="M11 9 4 16l7 7M21 9l7 7-7 7M18 6l-4 20" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "UI Engineering",
    description:
      "Pixel-perfect interfaces and design systems that scale gracefully with your product.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="11" height="11" />
        <rect x="17" y="4" width="11" height="11" />
        <rect x="4" y="17" width="11" height="11" />
        <rect x="17" y="17" width="11" height="11" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Web Performance",
    description:
      "Core Web Vitals, fast loads, and smooth rendering on every device and network.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="M16 3a13 13 0 1 1-9.2 3.8" />
        <path d="M16 9v7l5 4" />
        <path d="M3 16h2M16 3v2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Motion & Interaction",
    description:
      "Refined animations and micro-interactions that make interfaces feel alive.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="M16 3v26M3 16h26" />
        <circle cx="16" cy="16" r="7" />
        <circle cx="16" cy="16" r="2.5" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="rule-top mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mb-12 flex flex-col gap-3 md:mb-16">
        {/* 1. Small Uppercase Tag */}
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
          SERVICES
        </span>

        {/* 2. Main Title (Same Serif font as "More About Me") */}

        <h2
          className="text-3xl text-[#f1ede2] sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          What I Offer
        </h2>

        {/* 3. Subtitle / Description */}
        <p className="max-w-2xl text-sm leading-relaxed text-[#9a958a] sm:text-base">
          Robust frontends for ambitious products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {SERVICES.map((service, index) => (
          <div
            key={service.number}
            className={`lg:px-8 ${index > 0 ? "lg:border-l lg:border-border/50" : "lg:pl-0"} ${
              index === SERVICES.length - 1 ? "lg:pr-0" : ""
            }`}
          >
            <div className="text-primary">{service.icon}</div>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-sm italic text-muted-foreground">
                {service.number}
              </span>
              <h3 className="label-caps text-foreground">{service.title}</h3>
            </div>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
