const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "A deep dive into your product, users, and goals to map the right scope.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Interfaces crafted for clarity, elegance, and effortless usability.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Clean, maintainable React code with performance built in from the start.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Tested, polished, and shipped - with attention to every detail.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="rule-top mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mb-12 flex flex-col gap-3 md:mb-16">
        {/* 1. Small Uppercase Tag */}
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
          THE PROCESS
        </span>

        {/* 2. Main Title (Same Serif font)
        <h2 className="text-3xl font-serif text-[#f1ede2] sm:text-4xl">
          How I Work
        </h2>*/}
        <h2
          className="text-3xl text-[#f1ede2] sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          How I Work
        </h2>

        {/* 3. Subtitle / Description */}
        <p className="max-w-2xl text-sm leading-relaxed text-[#9a958a] sm:text-base">
          A thoughtful approach from concept to completion.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {STEPS.map((step, index) => (
          <div key={step.number} className="relative flex gap-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-medium text-foreground md:text-5xl">
                  {step.number}
                </span>
                <h3 className="label-caps text-primary">{step.title}</h3>
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
            {index < STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="mt-3 hidden self-start text-primary lg:block"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
