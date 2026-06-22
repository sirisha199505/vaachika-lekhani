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
              "radial-gradient(120% 95% at 50% 125%, #ffb347 0%, #e2641a 24%, #f1d8a6 56%, #fbf3e3 82%)",
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
          viewBox="0 0 1440 220"
          fill="#7a3c0e"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Ayodhya Nagara silhouette */}
          <rect x="372" y="202" width="696" height="18" />
          <rect x="404" y="186" width="632" height="18" />
          {[
            [486, 64, 56],
            [566, 90, 68],
            [650, 116, 80],
            [720, 148, 98],
            [790, 116, 80],
            [874, 90, 68],
            [954, 64, 56],
          ].map(([x, h, w]) => {
            const b = 188;
            const ay = b - h;
            return (
              <g key={x}>
                <path
                  d={`M${x - w / 2} ${b} C ${x - w / 2} ${b - h * 0.42} ${x - w * 0.15} ${b - h * 0.9} ${x} ${ay} C ${x + w * 0.15} ${b - h * 0.9} ${x + w / 2} ${b - h * 0.42} ${x + w / 2} ${b} Z`}
                />
                <circle cx={x} cy={ay - 4} r="3" />
              </g>
            );
          })}
          <line x1="720" y1="28" x2="720" y2="40" stroke="#7a3c0e" strokeWidth="2.5" />
          <path d="M720 28 l18 5 l-18 5 Z" />
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
