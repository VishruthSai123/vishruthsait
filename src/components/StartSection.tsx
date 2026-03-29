import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";

const StartSection = () => {
  return (
    <section id="about" className="relative min-h-[500px] md:min-h-[700px] py-20 md:py-32 px-4 md:px-16 lg:px-24 bg-black overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
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

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[350px] md:min-h-[500px]">
        <div className="section-badge">About Me</div>
        <h2 className="section-heading mt-4 px-2">Engineer. Builder. Problem Solver.</h2>
        <p className="mt-4 md:mt-6 text-foreground/60 font-body font-light text-xs md:text-base max-w-sm md:max-w-lg px-4">
          I specialize in building full-stack applications and intelligent systems — from AI-powered mobile apps to next-gen social platforms. I turn ideas into production-ready products.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="liquid-glass-strong rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium font-body text-foreground flex items-center gap-2 mt-6 md:mt-8 hover:bg-white/5 transition-colors"
        >
          Get In Touch
          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </a>
      </div>
    </section>
  );
};

export default StartSection;
