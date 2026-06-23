import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { useI18n } from "../i18n/I18nProvider";

const ICONS = ["🙏", "📿", "🌍", "💛"];

export default function Movement() {
  const { t } = useI18n();
  const pillars = t("movement.pillars");

  return (
    <section
      id="movement"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #f7e8cd 0%, #fbf3e3 70%)",
      }}
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{t("movement.eyebrow")}</p>
          </Reveal>
          <Reveal delay={0.08} as="h2">
            <span className="mt-4 block font-display text-4xl md:text-6xl font-800 leading-[1.05] text-gold-gradient">
              {t("movement.title")}
            </span>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl font-serif-elegant text-xl md:text-2xl italic leading-relaxed text-muted">
              {t("movement.intro1")}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/90">
              {t("movement.intro2")}
              <span className="mt-3 block font-serif-elegant text-xl text-amber">
                {t("movement.everyChant")}
              </span>
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-7 text-center transition-shadow duration-500 hover:glow-gold"
            >
              <span className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-saffron/25 to-gold/10 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                {ICONS[i]}
              </span>
              <h3 className="mt-5 font-display text-lg font-700 text-gold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="font-serif-elegant text-2xl md:text-3xl italic leading-relaxed text-ink/90">
              {t("movement.closing")}
            </p>
            <p className="mt-6 font-display text-lg tracking-[0.15em] text-amber text-glow">
              🔥 {t("movement.beginning")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
