import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { useI18n } from "../i18n/I18nProvider";

const LANGS = [
  { name: "Telugu", glyph: "అ", desc: "Telugu script", sample: "రామ రామ" },
  { name: "Hindi", glyph: "अ", desc: "Devanagari script", sample: "राम राम" },
  { name: "English", glyph: "A", desc: "Roman transliteration", sample: "Rama Rama" },
  { name: "Kannada", glyph: "ಅ", desc: "Kannada script", sample: "ರಾಮ ರಾಮ" },
];

// Sacred name "Rama" across scripts for the flowing strip
const NAMES = [
  "రామ", "राम", "Rama", "ರಾಮ",
];

export default function Languages() {
  const { t } = useI18n();
  return (
    <section id="languages" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("languages.eyebrow")}
          title={t("languages.title")}
          intro={t("languages.intro")}
        />

        {/* flowing multilingual sacred-name strip */}
        <div className="relative mt-8 overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...NAMES, ...NAMES].map((n, i) => (
              <span
                key={i}
                className="font-indic text-2xl text-amber/55"
              >
                {n}
                <span className="mx-5 text-gold/30">•</span>
              </span>
            ))}
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
        >
          {LANGS.map((l) => (
            <motion.div
              key={l.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group glass flex items-center gap-4 rounded-2xl p-5 transition-shadow duration-500 hover:glow-gold"
            >
              <span className="font-indic grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-saffron/25 to-gold/5 text-4xl text-gold-gradient transition-transform duration-500 group-hover:scale-110">
                {l.glyph}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-700 text-gold">{l.name}</h3>
                <p className="text-xs uppercase tracking-wider text-muted/70">
                  {l.desc}
                </p>
                <p className="font-indic mt-1 text-amber/90">{l.sample}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
