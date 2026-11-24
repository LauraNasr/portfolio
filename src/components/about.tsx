import laptopImage from "../assets/laptop.jpg";

const FEATURES = [
  {
    icon: "{ }",
    title: "Real-world React",
    description:
      "Building responsive websites and web applications with React.js at in2info.",
  },
   {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.2-4.2" />
      </svg>
    ),
    title: "SEO-minded",
    description:
      "Keyword research, on-page SEO and Google Search Console reports for the sites I build.",
  },
  {
    icon: "↗",
    title: "Design to deployment",
    description:
      "Pixel-perfect interfaces, FTP deployment and visual assets in Photoshop and Canva.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="rule-top mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Left Side: Image Container */}
        <div className="relative flex justify-center lg:col-span-5">
          {/* Background Organic Blob */}
          <div className="absolute -left-10 -bottom-6 -top-6 -right-6 -z-10 rounded-[40%] bg-primary/20 blur-xl opacity-70 transform -rotate-6 transition-all duration-500" />
          
          <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-2xl scale-110" />

          {/* Main Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-primary/20 bg-background/80 p-1.5 shadow-2xl backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.7rem]">
              <img
                src={laptopImage}
                alt="Workspace setup"
                className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-72 md:h-80"
              />
            </div>
          </div>

          {/* Handwritten Badge */}
          <div className="absolute -right-6 top-6 z-20 flex flex-col items-center rotate-12 select-none pointer-events-none">
            <span className="font-serif text-sm font-medium italic tracking-wide text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Better
            </span>
            <span className="font-serif text-sm font-medium italic tracking-wide text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] -mt-1">
              Together
            </span>
            <span className="text-xs text-primary mt-0.5 animate-pulse">
              ♡
            </span>
          </div>
        </div>

        {/* Right Side: Content & Clearer Features */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="mb-4 flex flex-col gap-2">
            <span className="label-caps text-primary">About Me</span>

           {/* <h2 className="font-display text-3xl font-medium text-foreground md:text-4xl">
              More About Me
            </h2>*/}
             <h2
          className="text-3xl text-[#f1ede2] sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          More About Me
        </h2>
          </div>

          <p className="mb-4 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            I'm a frontend developer based in Beirut, with a Master's degree in
            Computer Science from the Lebanese University and hands-on
            experience building responsive websites with React.js. I enjoy
            turning designs into clean, user-friendly interfaces, and I care
            about performance, accessibility and SEO.
          </p>

          <p className="mb-4 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
            I also work on keyword research, on-page optimization and
            performance monitoring with Google Search Console, so the websites
            I build are not only well designed but also easy to find. I handle
            deployment too, using FTP (FileZilla). I'm looking for a frontend
            developer role where I can keep growing with a team.
          </p>

          {/* Features Grid with High Clarity Typography */}
          <div className="border-t border-border/50 pt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {FEATURES.map((feature) => (
                <article
                  key={feature.title}
                  className="group flex items-start gap-3.5"
                >
                  {/* Icon Circle */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/50 text-primary transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/10">
                    <span aria-hidden="true" className="text-base">
                      {feature.icon}
                    </span>
                  </div>

                  <div>
                    {/* Clear Main Title */}
                    <h3 className="  tracking-wide "  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {feature.title}
                    </h3>

                    {/* Clear Description Paragraph */}
                    <p className="mt-1 text-xs font-normal leading-relaxed text-muted-foreground/90">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}