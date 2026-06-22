import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";

/** Header language switcher — instant, no-refresh, persisted. */
export default function LanguageSwitcher({ compact = false }) {
  const { lang, changeLang, languages, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const current = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-2 text-sm text-gold transition-colors hover:border-gold/60 hover:bg-gold/12"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        <span className={compact ? "font-indic" : "font-indic max-w-[7rem] truncate"}>
          {current.native}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 max-h-[70vh] w-52 overflow-auto rounded-2xl border border-gold/20 bg-bg-2/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            {languages.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      changeLang(l.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      active
                        ? "bg-gold/15 text-gold"
                        : "text-muted hover:bg-gold/8 hover:text-ink"
                    }`}
                  >
                    <span className="font-indic text-base">{l.native}</span>
                    <span className="text-xs text-muted/60">{l.label}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
