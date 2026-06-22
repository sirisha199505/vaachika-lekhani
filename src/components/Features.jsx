import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "../lib/motion";

const FEATURES = [
  { icon: "🎯", title: "Goal-Based Sadhana", desc: "Set daily, monthly, or lifetime mantra goals and watch devotion compound." },
  { icon: "🔥", title: "Streaks & Milestones", desc: "Build unbroken discipline with streaks and sacred milestone rewards." },
  { icon: "👨‍👩‍👧‍👦", title: "Family Profiles", desc: "One device, many devotees — each with their own private journey." },
  { icon: "🌐", title: "Global Sadhanas", desc: "Join collective chanting movements happening across the world." },
  { icon: "🏆", title: "Practice Circle", desc: "A community of devotees walking the path alongside you." },
  { icon: "🔔", title: "Daily Reminders", desc: "Gentle, mindful nudges that keep your practice steady." },
  { icon: "🎵", title: "Sruthi Ambience", desc: "Immersive tanpura and temple soundscapes for deeper focus." },
  { icon: "📤", title: "Share Your Journey", desc: "Celebrate milestones with beautiful, shareable cards." },
  { icon: "🏪", title: "Rewards Store", desc: "Turn earned points into meaningful spiritual rewards." },
];

export default function Features() {
  return (
    <section id="features" className="section bg-geometry">
      <div className="container-x">
        <SectionHeading
          eyebrow="Features"
          title="Everything a devotee needs"
          intro="A complete sadhana companion — crafted with the care of a temple and the precision of modern technology."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-shadow duration-500 hover:glow-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron/25 to-gold/10 text-2xl transition-transform duration-500 group-hover:scale-110">
                  {f.icon}
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
