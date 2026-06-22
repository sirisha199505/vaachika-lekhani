import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUp, stagger, viewport } from "../lib/motion";

const PROMISES = [
  "Offline Voice Recognition",
  "Offline OCR",
  "No Cloud Processing",
  "No Firebase",
  "No Ad Networks",
  "No Analytics SDKs",
  "Complete Data Deletion",
];

export default function Privacy() {
  return (
    <section
      id="privacy"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(100% 80% at 50% 0%, #15100a 0%, #0a0604 60%, #070401 100%)",
      }}
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Shield */}
        <Reveal>
          <div className="relative mx-auto grid h-[340px] w-[340px] place-items-center">
            <div className="absolute h-64 w-64 rounded-full bg-gold/20 blur-3xl animate-pulse-glow" />
            <motion.svg
              viewBox="0 0 200 230"
              className="relative h-[300px] drop-glow"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <defs>
                <linearGradient id="shield" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f4c95d" />
                  <stop offset="1" stopColor="#b8801f" />
                </linearGradient>
              </defs>
              <path
                d="M100 10 L180 40 V110 C180 165 145 205 100 222 C55 205 20 165 20 110 V40 Z"
                fill="rgba(244,201,93,0.06)"
                stroke="url(#shield)"
                strokeWidth="2.5"
              />
              <path
                d="M100 25 L166 50 V108 C166 154 138 188 100 203 C62 188 34 154 34 108 V50 Z"
                fill="none"
                stroke="rgba(244,201,93,0.25)"
                strokeWidth="1"
              />
              {/* Om in center */}
              <text
                x="100"
                y="135"
                textAnchor="middle"
                fontSize="76"
                fontFamily="'Noto Sans Devanagari', serif"
                fontWeight="700"
                fill="url(#shield)"
              >
                ॐ
              </text>
              {/* lock keyhole accent */}
              <circle cx="100" cy="170" r="6" fill="#f4c95d" />
            </motion.svg>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <span className="eyebrow">Privacy First</span>
          <Reveal as="h2" className="mt-3 font-display text-4xl md:text-5xl font-800 text-gold-gradient">
            Your Practice Belongs To You
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Devotion is sacred and private. Everything happens on your device —
              nothing is uploaded, tracked, or sold. Ever.
            </p>
          </Reveal>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {PROMISES.map((p) => (
              <motion.li
                key={p}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-xl border border-gold/15 bg-bg-2/40 px-4 py-3"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  ✓
                </span>
                <span className="text-sm text-ink/90">{p}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
