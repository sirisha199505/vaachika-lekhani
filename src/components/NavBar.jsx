import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "./BrandMark";

const LINKS = [
  ["Meaning", "meaning"],
  ["Practice", "practice"],
  ["Features", "features"],
  ["Mantras", "mantras"],
  ["Privacy", "privacy"],
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/15 bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <button
            onClick={() => go("top")}
            className="flex items-center gap-3"
            aria-label="Vachika Lekhini home"
          >
            <BrandMark size={40} rounded={12} />
            <span className="font-display text-lg font-700 tracking-wide text-gold-gradient">
              Vachika Lekhini
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-sm font-medium text-muted transition-colors hover:text-gold"
              >
                {label}
              </button>
            ))}
            <button onClick={() => go("cta")} className="btn-sacred !py-2.5 !px-6 text-sm">
              Join Early Access
            </button>
          </div>

          <button
            className="md:hidden text-gold"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-gold/15 bg-bg/95 backdrop-blur-xl"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {LINKS.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="rounded-lg px-3 py-3 text-left text-base text-muted hover:bg-gold/10 hover:text-gold"
                >
                  {label}
                </button>
              ))}
              <button onClick={() => go("cta")} className="btn-sacred mt-2 justify-center">
                Join Early Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
