import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "../lib/motion";

const WAYS = [
  {
    icon: "🎙",
    title: "Voice Chanting",
    tag: "Vāchika Japa",
    points: [
      "AI-powered offline mantra recognition",
      "Count hands-free while you chant",
      "Your voice never leaves the device",
    ],
  },
  {
    icon: "✍",
    title: "Handwriting Practice",
    tag: "Likhita Japa",
    points: [
      "Write mantras digitally with grace",
      "Upload handwritten pages to verify",
      "Offline OCR preserves the tradition",
    ],
  },
  {
    icon: "👆",
    title: "Manual Counter",
    tag: "Mānasika Japa",
    points: [
      "An elegant digital mala",
      "Tap to count, breath by breath",
      "Perfect for silent meditation",
    ],
  },
];

export default function ThreeWays() {
  return (
    <section id="practice" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Three Ways to Practice"
          title="Choose how your devotion flows"
          intro="Voice, hand, or stillness — every path of japa, honoured and counted."
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
              key={w.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group glass relative overflow-hidden rounded-3xl p-8 transition-shadow duration-500 hover:glow-gold"
            >
              {/* hover wash */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-saffron/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-saffron/25 to-gold/10 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                <span className="animate-floaty">{w.icon}</span>
              </div>

              <p className="font-deva text-sm text-amber/80">{w.tag}</p>
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
