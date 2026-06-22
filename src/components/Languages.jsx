import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "../lib/motion";

const LANGS = [
  { native: "हिन्दी", name: "Hindi", sample: "राम राम" },
  { native: "తెలుగు", name: "Telugu", sample: "రామ రామ" },
  { native: "ಕನ್ನಡ", name: "Kannada", sample: "ರಾಮ ರಾಮ" },
  { native: "English", name: "English", sample: "Rama Rama" },
];

export default function Languages() {
  return (
    <section id="languages" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Multilingual Experience"
          title="Pray in your mother tongue"
          intro="Sacred sound knows no single script. Practice in the language closest to your heart."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LANGS.map((l, i) => (
            <motion.div
              key={l.name}
              variants={fadeUp}
              whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
              className="group glass relative overflow-hidden rounded-3xl p-8 text-center transition-shadow duration-500 hover:glow-gold"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-saffron/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="font-deva text-4xl font-800 text-saffron-gradient drop-glow">
                {l.native}
              </p>
              <p className="mt-3 text-sm uppercase tracking-widest text-muted/70">
                {l.name}
              </p>
              <div className="mx-auto my-4 h-px w-10 bg-gold/40" />
              <p className="font-deva text-lg text-amber/90">{l.sample}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
