const FeaturesChess = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-16 lg:px-24 bg-black">
      <div className="text-center mb-10 md:mb-16">
        <div className="section-badge">Selected Work</div>
        <h2 className="section-heading px-2">Projects that shipped.</h2>
      </div>

      {/* Row 1 — SendRight AI */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 max-w-6xl mx-auto">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h3 className="text-xl md:text-3xl font-heading italic text-foreground tracking-tight">
            SendRight AI
          </h3>
          <p className="text-foreground/60 font-body font-light text-xs md:text-sm max-w-md mx-auto lg:mx-0">
            The intelligent keyboard that transforms your typing experience with advanced AI technology. Trusted by 2.5k+ real users on the Google Play Store.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.vishruth.key1&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block liquid-glass-strong rounded-full px-5 py-2.5 text-xs md:text-sm font-medium font-body text-foreground hover:bg-white/5 transition-colors"
          >
            View on Play Store
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://res.cloudinary.com/dlthejrmm/image/upload/v1774713439/Black_and_Silver_Modern_Delivery_Transport_Banner_Landscape_20260328_212412_0000_riuq5f.png"
              alt="SendRight AI — intelligent keyboard app preview"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Row 2 — Open House */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 mb-16 md:mb-24 max-w-6xl mx-auto">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h3 className="text-xl md:text-3xl font-heading italic text-foreground tracking-tight">
            Open House
          </h3>
          <p className="text-foreground/60 font-body font-light text-xs md:text-sm max-w-md mx-auto lg:mx-0">
            A social media platform built for engineers and startup founders to pitch ideas, discover co-founders, and connect with the builder community.
          </p>
          <a
            href="https://openhouse21.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block liquid-glass-strong rounded-full px-5 py-2.5 text-xs md:text-sm font-medium font-body text-foreground hover:bg-white/5 transition-colors"
          >
            View Live Demo
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://res.cloudinary.com/dlthejrmm/image/upload/v1774803522/Black_and_Silver_Modern_Delivery_Transport_Banner_Landscape_20260329_215827_0000_dpbh8s.png"
              alt="Open House — social platform for engineers and founders"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Row 3 — Code Eternal */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 max-w-6xl mx-auto">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h3 className="text-xl md:text-3xl font-heading italic text-foreground tracking-tight">
            Code Eternal
          </h3>
          <p className="text-foreground/60 font-body font-light text-xs md:text-sm max-w-md mx-auto lg:mx-0">
            An overlay panel that acts as a tab, generating prompts with super memory for all your vibe coding projects — with powerful, modern UI component integration like shadcn.
          </p>
          <a
            href="https://code-eternal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block liquid-glass-strong rounded-full px-5 py-2.5 text-xs md:text-sm font-medium font-body text-foreground hover:bg-white/5 transition-colors"
          >
            View Live Demo
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://res.cloudinary.com/dlthejrmm/image/upload/v1774803521/Black_and_Silver_Modern_Delivery_Transport_Banner_Landscape_20260329_215931_0000_jfiayk.png"
              alt="Code Eternal — AI prompt overlay for developers"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Row 4 — Vibe (Coming Soon) */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h3 className="text-xl md:text-3xl font-heading italic text-foreground tracking-tight">
            Vibe
          </h3>
          <p className="text-foreground/60 font-body font-light text-xs md:text-sm max-w-md mx-auto lg:mx-0">
            Powerful next generation super social-commerce app — a social media platform reimagined for the creator economy.
          </p>
          <span className="inline-block liquid-glass-strong rounded-full px-5 py-2.5 text-xs md:text-sm font-medium font-body text-foreground/50 cursor-default">
            Coming Soon
          </span>
        </div>
        <div className="flex-1 w-full">
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
            <img
              src="https://res.cloudinary.com/dlthejrmm/image/upload/v1774713439/Black_and_Silver_Modern_Delivery_Transport_Banner_Landscape_20260328_212558_0000_ieft6n.png"
              alt="Vibe — social commerce app preview"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesChess;
