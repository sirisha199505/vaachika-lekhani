import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { useI18n } from "../i18n/I18nProvider";

export default function ThreeWays() {
  const { t } = useI18n();
  const WAYS = [
    { icon: "🎙", tag: "Vāchika Japa", title: t("practice.voiceTitle"), points: t("practice.voicePoints") },
    { icon: "✍", tag: "Likhita Japa", title: t("practice.writingTitle"), points: t("practice.writingPoints") },
    { icon: "👆", tag: "Mānasika Japa", title: t("practice.manualTitle"), points: t("practice.manualPoints") },
  ];

  return (
    <section id="practice" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("practice.eyebrow")}
          title={t("practice.title")}
          intro={t("practice.intro")}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-7 md:grid-cols-3"
        >
          {WAYS.map((w) => (
            <motion.article
              key={w.tag}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group glass relative overflow-hidden rounded-3xl p-8 transition-shadow duration-500 hover:glow-gold"
            >
              {/* hover wash */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-saffron/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-saffron/25 to-gold/10 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                <span className="animate-floaty">{w.icon}</span>
              </div>

              <p className="brand-latin text-sm text-amber/80">{w.tag}</p>
              <h3 className="mt-1 font-display text-2xl font-700 text-gold-gradient">
                {w.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {w.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-muted">
                    <span className="mt-1 text-gold">✦</span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
