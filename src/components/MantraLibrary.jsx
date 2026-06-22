import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useI18n } from "../i18n/I18nProvider";

const ICONS = ["💰", "☮", "💚", "🛡", "💪", "🕊", "🌟", "🙏"];
const DEVA = ["श्री", "शांति", "धन्वंतरि", "दुर्गा", "हनुमान", "मोक्ष", "सरस्वती", "भक्ति"];

export default function MantraLibrary() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const R = 42; // radius as % of the ring container
  const CATS = t("mantras.cats").map((c, i) => ({
    icon: ICONS[i],
    deva: DEVA[i],
    name: c.name,
    desc: c.desc,
  }));

  return (
    <section id="mantras" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("mantras.eyebrow")}
          title={t("mantras.title")}
          intro={t("mantras.intro")}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Mandala ring */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            {/* concentric rings */}
            <div className="absolute inset-0 rounded-full border border-gold/15" />
            <div className="absolute inset-[12%] rounded-full border border-gold/10" />
            <div className="absolute inset-[24%] rounded-full border border-dashed border-gold/15 animate-spin-slow" />

            {/* center */}
            <div className="absolute left-1/2 top-1/2 grid h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full glass text-center glow-gold">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="px-4"
                >
                  <p className="font-deva text-3xl font-800 text-saffron-gradient">
                    {CATS[active].deva}
                  </p>
                  <p className="mt-1 text-3xl">{CATS[active].icon}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* petals */}
            {CATS.map((c, i) => {
              const angle = (i / CATS.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + R * Math.cos(angle);
              const y = 50 + R * Math.sin(angle);
              const isActive = i === active;
              return (
                <button
                  key={c.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={c.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <motion.span
                    animate={{ scale: isActive ? 1.18 : 1 }}
                    className={`grid h-14 w-14 place-items-center rounded-full text-2xl transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-amber to-saffron text-bg glow-gold"
                        : "glass text-ink"
                    }`}
                  >
                    {c.icon}
                  </motion.span>
                </button>
              );
            })}
          </div>

          {/* Details */}
          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-5xl">{CATS[active].icon}</span>
                <h3 className="mt-4 font-display text-3xl font-700 text-gold-gradient">
                  {CATS[active].name}
                </h3>
                <p className="font-deva mt-1 text-xl text-amber/90">{CATS[active].deva}</p>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                  {CATS[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-2">
              {CATS.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                    i === active
                      ? "bg-gold/20 text-gold"
                      : "text-muted/70 hover:text-gold"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
