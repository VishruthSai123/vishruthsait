import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
      <div className="flex items-center w-full max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 mr-auto">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center font-heading italic text-foreground text-lg md:text-xl">
            V
          </div>
        </div>

        {/* Desktop nav pill */}
        <div className="hidden md:flex liquid-glass rounded-full px-2 py-2 items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="text-sm font-medium text-foreground/90 font-body px-4 py-2 hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="bg-foreground text-background rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1.5 hover:bg-foreground/90 transition-colors"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Desktop spacer */}
        <div className="hidden md:block w-12 flex-shrink-0 ml-auto" />
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-3 liquid-glass rounded-2xl p-4 flex flex-col gap-1 max-w-6xl mx-auto">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="text-sm font-medium text-foreground/90 font-body px-4 py-3 hover:text-foreground transition-colors rounded-xl hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="bg-foreground text-background rounded-full px-4 py-3 text-sm font-medium font-body flex items-center justify-center gap-1.5 mt-2 hover:bg-foreground/90 transition-colors"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
