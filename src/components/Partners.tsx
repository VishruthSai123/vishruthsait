const technologies = ["Kotlin", "Python", "Java", "Full Stack"];

const Partners = () => {
  return (
    <section id="home" className="bg-black py-10 md:py-16 px-4 md:px-6 flex flex-col items-center">
      <div className="section-badge mb-4 md:mb-6">Tech I Work With</div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {technologies.map((name) => (
          <span
            key={name}
            className="text-xl md:text-3xl font-heading italic text-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Partners;
