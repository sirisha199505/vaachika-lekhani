import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";

const EASE = [0.22, 1, 0.36, 1];

function StoreBadge({ store }) {
  const { t } = useI18n();
  return (
    <div className="gold-hairline flex items-center gap-3 rounded-2xl px-4 py-2.5">
      <span className="text-2xl">{store === "apple" ? "" : "▶"}</span>
      <div className="text-left leading-tight">
        <p className="text-[10px] uppercase tracking-widest text-muted/70">
          {t("hero.comingSoonOn")}
        </p>
        <p className="text-sm font-600 text-ink">
          {store === "apple" ? t("hero.appStore") : t("hero.googlePlay")}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12"
    >
      <div className="container-x grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div style={{ y: copyY, opacity: fade }} className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-deva text-2xl md:text-4xl font-700 text-saffron-gradient text-glow"
          >
            वाचक लेखिनी
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="brand-latin mt-2 font-display text-5xl sm:text-6xl md:text-[3.6rem] lg:text-6xl font-800 leading-[1.02] text-gold-gradient"
          >
            Vaachaka Lekhini
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="mt-4 font-serif-elegant text-xl md:text-2xl text-amber"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: EASE }}
            className="mx-auto lg:mx-0 mt-4 max-w-xl text-sm md:text-base leading-relaxed text-muted"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: EASE }}
            className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <button
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-sacred"
            >
              {t("hero.joinEarly")} →
            </button>
            <button
              onClick={() => document.getElementById("practice")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost"
            >
              {t("hero.exploreFeatures")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.56, ease: EASE }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <StoreBadge store="apple" />
            <StoreBadge store="play" />
          </motion.div>
        </motion.div>

        {/* Sacred image */}
        <motion.div style={{ y: phoneY }} className="relative flex justify-center">
          {/* aura */}
          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]"
            style={{
              background:
                "radial-gradient(circle, rgba(226,140,43,0.35), rgba(210,84,26,0.12) 45%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 36 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="relative animate-floaty-slow"
          >
            <div className="relative mx-auto w-[240px] sm:w-[300px] lg:w-[360px]">
              {/* decorative gold frame */}
              <div className="gold-hairline overflow-hidden rounded-[2rem] p-2 glow-gold">
                <img
                  src="/Baala%20Rama_01_Vachakalekhini.svg"
                  alt="Baala Rama — the divine child, at the temple"
                  width="810"
                  height="1012"
                  loading="eager"
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
              {/* corner glints */}
              <span className="pointer-events-none absolute -left-3 -top-3 text-2xl text-saffron/70">✦</span>
              <span className="pointer-events-none absolute -bottom-3 -right-3 text-2xl text-gold/70">✦</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted/60 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-gold/40 p-1"
        >
          <div className="h-1.5 w-full rounded-full bg-gold/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
