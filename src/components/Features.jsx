import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { useI18n } from "../i18n/I18nProvider";

const ICONS = ["🎯", "🔥", "👨‍👩‍👧‍👦", "🌐", "🏆", "🔔", "🎵", "📤", "🏪"];

export default function Features() {
  const { t } = useI18n();
  const items = t("features.items");

  return (
    <section id="features" className="section bg-geometry">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          intro={t("features.intro")}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-shadow duration-500 hover:glow-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron/25 to-gold/10 text-2xl transition-transform duration-500 group-hover:scale-110">
                  {ICONS[i]}
                </span>
                <div>
                  <h3 className="font-display text-lg font-700 text-gold transition-colors group-hover:text-amber">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
