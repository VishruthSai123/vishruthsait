const testimonials = [
  {
    quote: "Vishruth delivered an ML pipeline that cut our processing time by 80%. His depth in AI is matched only by his ability to communicate complex ideas simply.",
    name: "Arjun Mehta",
    role: "CTO, Luminary AI",
  },
  {
    quote: "One of the sharpest AI engineers I've worked with. He took our vague requirements and turned them into a production-grade recommendation engine in weeks.",
    name: "Priya Sharma",
    role: "VP Engineering, Arcline",
  },
  {
    quote: "Vishruth doesn't just build models — he understands the business problem first. That's rare, and it's what makes his work exceptional.",
    name: "Karthik Iyer",
    role: "Product Lead, Helix",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 lg:px-24 bg-black">
      <div className="text-center mb-10 md:mb-16">
        <div className="section-badge">Testimonials</div>
        <h2 className="section-heading px-2">What people say.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {testimonials.map(({ quote, name, role }) => (
          <div key={name} className="liquid-glass rounded-2xl p-6 md:p-8">
            <p className="text-foreground/80 font-body font-light text-xs md:text-sm italic mb-4 md:mb-6">
              "{quote}"
            </p>
            <div>
              <div className="text-foreground font-body font-medium text-sm">{name}</div>
              <div className="text-foreground/50 font-body font-light text-xs">{role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
