import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[100dvh] md:h-[800px] lg:h-[1000px] bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
      />

      {/* Center radial vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center 40%, transparent 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Top gradient for navbar clarity */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] h-[120px]"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[200px] md:h-[300px]"
        style={{ background: "linear-gradient(to bottom, transparent, black)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 h-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2 mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-foreground/90 text-xs font-medium font-body">
            Available
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="Vishruth Sai Thuraka"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.85] tracking-[-2px] md:tracking-[-4px] max-w-4xl px-2"
          delay={0.1}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 md:mt-8 text-foreground/60 font-body font-light text-xs md:text-base max-w-sm md:max-w-lg px-4"
        >
          Full-Stack Developer & AI enthusiast crafting intelligent apps, scalable systems, and products that users love.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="liquid-glass-strong rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-medium font-body text-foreground flex items-center gap-2 hover:bg-white/5 transition-colors"
          >
            View My Work
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
          <button className="text-foreground/70 text-xs md:text-sm font-body font-light flex items-center gap-2 hover:text-foreground transition-colors">
            <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
