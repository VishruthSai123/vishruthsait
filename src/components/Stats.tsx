import HlsVideo from "./HlsVideo";

const stats = [
  { value: "3+", label: "Years in AI/ML" },
  { value: "15+", label: "Projects delivered" },
  { value: "5", label: "Research papers" },
  { value: "99.2%", label: "Model accuracy (best)" },
];

const Stats = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-16 lg:px-24 bg-black overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        desaturated
      />
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: "linear-gradient(to bottom, black, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: "linear-gradient(to top, black, transparent)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="liquid-glass rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading italic text-foreground">
                  {value}
                </div>
                <div className="text-foreground/60 font-body font-light text-[10px] md:text-sm mt-1 md:mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
