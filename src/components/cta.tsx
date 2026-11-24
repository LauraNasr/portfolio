import contactImage from "../assets/cta-notebook.jpg"; // soura l notebook

const EMAIL = "lauramehsennasr9@gmail.com"; 

const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" };

export function CallToAction() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
    >
      <div className="grid overflow-hidden border border-[#c9a45c]/20 bg-[#0f0d0a] md:grid-cols-2">
        {/* Text */}
        <div className="relative flex flex-col justify-center gap-5 px-8 py-12 md:px-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            OPEN TO OPPORTUNITIES
          </span>

          <h2
            className="text-3xl leading-tight text-[#c9a45c] sm:text-4xl"
            style={SERIF}
          >
            Looking for a
            <br />
            frontend developer?
          </h2>

          <p className="max-w-sm text-sm leading-relaxed text-[#9a958a]">
            I'm a junior frontend developer eager to join a team, learn from
            experienced engineers and help build great products.
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex w-fit items-center gap-3 border border-[#c9a45c]/60 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a45c] transition-colors hover:bg-[#c9a45c] hover:text-[#0f0d0a]"
            >
              Get in touch <span>→</span>
            </a>
          </div>


        </div>

        {/* Image */}
        <div className="min-h-[220px] md:min-h-full">
          <img
            src={contactImage}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}