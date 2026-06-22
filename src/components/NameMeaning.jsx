import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { useI18n } from "../i18n/I18nProvider";

export default function NameMeaning() {
  const { t } = useI18n();
  const PARTS = [
    { deva: "वाचक", roman: "Vaachaka", roles: t("meaning.vachikaRoles"), root: t("meaning.vachikaRoot") },
    { deva: "लेखिनी", roman: "Lekhini", roles: t("meaning.lekhiniRoles"), root: t("meaning.lekhiniRoot") },
  ];

  return (
    <section id="meaning" className="section bg-geometry">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — calligraphy */}
        <Reveal variants={fadeUp}>
          <div className="relative mx-auto max-w-md">
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(244,201,93,0.18), transparent 70%)" }}
            />
            <div className="gold-hairline rounded-[2rem] px-8 py-14 text-center">
              <p className="eyebrow mb-8">{t("meaning.sacredName")}</p>
              <p className="font-deva text-6xl md:text-7xl font-800 text-saffron-gradient leading-tight text-glow">
                वाचक
              </p>
              <p className="font-deva text-6xl md:text-7xl font-800 text-gold-gradient leading-tight mt-2">
                लेखिनी
              </p>
              <div className="divider-glyph my-8">
                <span className="text-gold/70">✶</span>
              </div>
              <p className="font-serif-elegant text-xl italic text-muted">
                {t("meaning.calligraphyQuote")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right — cards */}
        <div>
          <div className="mb-8">
            <span className="eyebrow">{t("meaning.eyebrow")}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-700 text-gold-gradient">
              {t("meaning.title")}
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-5"
          >
            {PARTS.map((p) => (
              <motion.div
                key={p.roman}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="glass rounded-2xl p-6 transition-shadow hover:glow-gold"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-deva text-4xl font-800 text-saffron-gradient">
                    {p.deva}
                  </span>
                  <div>
                    <h3 className="brand-latin font-display text-2xl font-700 text-gold">{p.roman}</h3>
                    <p className="text-sm text-amber/90">{p.roles}</p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{p.root}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2}>
            <p className="mt-8 border-l-2 border-gold/50 pl-5 font-serif-elegant text-xl md:text-2xl italic leading-relaxed text-ink/90">
              {t("meaning.conclusion")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
