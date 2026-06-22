import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const EASE = [0.22, 1, 0.36, 1];

function StoreBadge({ store }) {
  return (
    <div className="gold-hairline flex items-center gap-3 rounded-2xl px-4 py-2.5">
      <span className="text-2xl">{store === "apple" ? "" : "▶"}</span>
      <div className="text-left leading-tight">
        <p className="text-[10px] uppercase tracking-widest text-muted/70">
          Coming soon on
        </p>
        <p className="text-sm font-600 text-ink">
          {store === "apple" ? "App Store" : "Google Play"}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
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
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div style={{ y: copyY, opacity: fade }} className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-deva text-3xl md:text-5xl font-700 text-saffron-gradient text-glow"
          >
            वाचक लेखिनी
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl font-800 leading-[1.02] text-gold-gradient"
          >
            Vachika Lekhini
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="mt-5 font-serif-elegant text-2xl md:text-3xl text-amber"
          >
            Chant with Purpose. Write with Devotion.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: EASE }}
            className="mx-auto lg:mx-0 mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted"
          >
            A sacred digital companion that helps practitioners count, write, and
            deepen their mantra sadhana through voice, handwriting, and mindful
            practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <button
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-sacred"
            >
              Join Early Access →
            </button>
            <button
              onClick={() => document.getElementById("practice")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost"
            >
              Explore Features
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.56, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <StoreBadge store="apple" />
            <StoreBadge store="play" />
          </motion.div>
        </motion.div>

        {/* Phone */}
        <motion.div style={{ y: phoneY }} className="relative flex justify-center">
          {/* aura */}
          <div
            className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle, rgba(244,201,93,0.35), rgba(255,140,0,0.12) 45%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="relative animate-floaty-slow"
          >
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
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
