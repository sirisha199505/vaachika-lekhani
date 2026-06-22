import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { fadeUp, stagger, viewport } from "../lib/motion";

const STATS = [
  { label: "Today's Count", to: 1188, of: "/ 1,008 goal", accent: true },
  { label: "Current Streak", to: 64, suffix: " days" },
  { label: "Longest Streak", to: 121, suffix: " days" },
  { label: "Reward Points", to: 8450, suffix: " pts" },
];

const MILESTONES = [
  { label: "1 Lakh", value: "1,00,000", done: true },
  { label: "5 Lakh", value: "5,00,000", done: true },
  { label: "10 Lakh", value: "10,00,000", done: true },
  { label: "25 Lakh", value: "25,00,000", done: false, current: true },
  { label: "50 Lakh", value: "50,00,000", done: false },
  { label: "1 Crore", value: "1,00,00,000", done: false },
];

export default function Dashboard() {
  return (
    <section id="progress" className="section bg-geometry">
      <div className="container-x">
        <SectionHeading
          eyebrow="Goals · Streaks · Rewards"
          title="Watch devotion become a discipline"
          intro="Every chant counted, every streak honoured, every milestone a celebration."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Stats panel */}
          <Reveal>
            <div className="glass gold-hairline h-full rounded-3xl p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="eyebrow">Your Sadhana</p>
                  <p className="font-display text-xl text-gold">Daily Dashboard</p>
                </div>
                <span className="rounded-full bg-saffron/20 px-3 py-1 text-xs text-amber">
                  🔥 On a roll
                </span>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="grid grid-cols-2 gap-4"
              >
                {STATS.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    className={`rounded-2xl p-5 ${
                      s.accent
                        ? "bg-gradient-to-br from-saffron/25 to-gold/5 glow-gold"
                        : "bg-bg-2/60"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-wider text-muted/70">
                      {s.label}
                    </p>
                    <p className="mt-2 font-display text-3xl font-700 text-gold-gradient">
                      <CountUp to={s.to} suffix={s.suffix || ""} />
                    </p>
                    {s.of && <p className="mt-1 text-xs text-amber/80">{s.of}</p>}
                  </motion.div>
                ))}
              </motion.div>

              {/* progress bar */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs text-muted">
                  <span>Daily goal progress</span>
                  <span className="text-gold">118%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-bg-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={viewport}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-gold-rich via-gold to-amber"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Milestone timeline */}
          <Reveal delay={0.15}>
            <div className="glass gold-hairline h-full rounded-3xl p-7">
              <p className="eyebrow">Lifetime Milestones</p>
              <p className="font-display text-xl text-gold">The path to a Crore</p>

              <div className="relative mt-6 pl-6">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
                <div className="flex flex-col gap-5">
                  {MILESTONES.map((m) => (
                    <div key={m.label} className="relative flex items-center gap-4">
                      <span
                        className={`absolute -left-6 grid h-4 w-4 place-items-center rounded-full ${
                          m.done
                            ? "bg-gold text-bg"
                            : m.current
                            ? "bg-saffron animate-pulse-glow"
                            : "border border-gold/30 bg-bg"
                        }`}
                      >
                        {m.done && (
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l2.5 2.5L10 3" stroke="#0d0703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <div className="flex flex-1 items-center justify-between">
                        <span
                          className={`font-display text-lg ${
                            m.done || m.current ? "text-gold" : "text-muted/60"
                          }`}
                        >
                          {m.label}
                        </span>
                        <span className="font-deva text-sm text-muted/70">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
