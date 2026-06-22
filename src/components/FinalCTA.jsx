import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { viewport } from "../lib/motion";
import { useI18n } from "../i18n/I18nProvider";

export default function FinalCTA() {
  const { t } = useI18n();
  return (
    <section id="cta" className="relative overflow-hidden py-32 md:py-44">
      {/* glowing temple horizon */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 120%, #ff8c00 0%, #c25600 22%, #3a1c06 50%, #0d0703 80%)",
          }}
        />
        <motion.div
          className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,221,150,0.9), rgba(255,140,0,0.2) 55%, transparent)",
          }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
          viewBox="0 0 1440 200"
          fill="#0a0502"
          preserveAspectRatio="xMidYMax meet"
        >
          <path d="M700 200 V90 q20 -50 20 -64 q4 14 20 64 V200 Z" />
          <circle cx="720" cy="20" r="6" />
          <path d="M560 200 V120 l28 -18 v-12 l40 -20 l40 20 v12 l28 18 V200 Z" />
          <path d="M812 200 V120 l28 -18 v-12 l40 -20 l40 20 v12 l28 18 V200 Z" />
          <rect x="380" y="150" width="120" height="50" />
          <rect x="940" y="150" width="120" height="50" />
        </svg>
      </div>

      <div className="container-x text-center">
        <Reveal>
          <p className="font-deva text-2xl text-amber text-glow">श्री राम जय राम जय जय राम</p>
        </Reveal>
        <Reveal delay={0.1} as="h2">
          <span className="mt-4 block font-display text-5xl md:text-7xl font-900 leading-[1.02] text-gold-gradient text-glow">
            {t("cta.title")}
          </span>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/90">
            {t("cta.subtext")}
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#cta" className="btn-sacred text-lg">
            {t("cta.joinEarly")} →
          </a>
          <span className="rounded-full border border-gold/30 px-6 py-3 text-sm uppercase tracking-[0.25em] text-gold/80">
            {t("cta.comingSoon")}
          </span>
        </motion.div>

        <Reveal delay={0.4}>
          <p className="mt-12 text-sm tracking-[0.3em] text-amber/70">
            ❈ SRI RAMA JAYA RAMA JAYA JAYA RAMA ❈
          </p>
        </Reveal>
      </div>
    </section>
  );
}
