import HlsVideo from "./HlsVideo";

const CTAFooter = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-16 lg:px-24 bg-black overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: "linear-gradient(to bottom, black, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: "linear-gradient(to top, black, transparent)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-2">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9]">
          Let's build something great.
        </h2>
        <p className="mt-4 md:mt-6 text-foreground/60 font-body font-light text-xs md:text-base max-w-sm md:max-w-md">
          Have a project in mind? I'm always open to discussing opportunities, collaborations, or just connecting.
        </p>
        <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
          <a
            href="mailto:vishruthsait@gmail.com"
            className="liquid-glass-strong rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium font-body text-foreground hover:bg-white/5 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://www.instagram.com/vishruth_sai_7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium font-body hover:bg-foreground/90 transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-32 pt-6 md:pt-8 border-t border-foreground/10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <span className="text-foreground/40 text-xs font-body">© 2026 Vishruth Sai Thuraka</span>
          <div className="flex items-center gap-4 md:gap-6">
            {[
              { label: "GitHub", href: "https://github.com/VishruthSai123" },
              { label: "Instagram", href: "https://www.instagram.com/vishruth_sai_7" },
              { label: "Email", href: "mailto:vishruthsait@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-foreground/40 text-xs font-body hover:text-foreground/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
