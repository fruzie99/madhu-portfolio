import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement;
        if (el && el.offsetTop <= scrollY) {
          setActive(LINKS[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight text-white md:text-xl">
          Madhurisha
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative pb-0.5 text-sm font-medium transition hover:text-white ${
                  active === link.href ? "text-white" : "text-white/80"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded p-2 text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded px-3 py-2 text-white/90 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
