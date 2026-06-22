import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUp, stagger, viewport } from "../lib/motion";

const PILLARS = [
  { icon: "🙏", title: "Chant Anytime", desc: "From anywhere in the world, your practice is always within reach." },
  { icon: "📿", title: "Track Your Nama Japa", desc: "Every count preserved — whether one Nama or one lakh." },
  { icon: "🌍", title: "Join a Global Community", desc: "Chant alongside devotees united by the Divine Name." },
  { icon: "💛", title: "Be Part of Something Eternal", desc: "A movement that outlives us all." },
];

export default function Movement() {
  return (
    <section
      id="movement"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #1a0e08 0%, #0d0703 70%)",
      }}
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">A Digital Spiritual Movement</p>
          </Reveal>
          <Reveal delay={0.08} as="h2">
            <span className="mt-4 block font-display text-4xl md:text-6xl font-800 leading-[1.05] text-gold-gradient">
              Where devotion meets technology
            </span>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl font-serif-elegant text-xl md:text-2xl italic leading-relaxed text-muted">
              For centuries, devotees have chanted the Divine Names of Bhagavan
              Sri Rama — seeking peace, strength, devotion, and spiritual growth.
              Today, we begin a new journey.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/90">
              Vachika Lekhini is being created to help devotees chant, count,
              track, and contribute their Nama Japa from anywhere in the world.
              <span className="mt-3 block font-serif-elegant text-xl text-amber">
                Whether you chant one Nama or one lakh Namas, every chant matters.
              </span>
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-7 text-center transition-shadow duration-500 hover:glow-gold"
            >
              <span className="inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-saffron/25 to-gold/10 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                {p.icon}
              </span>
              <h3 className="mt-5 font-display text-lg font-700 text-gold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-serif-elegant text-2xl md:text-3xl italic leading-relaxed text-ink/90">
              This is more than an app. It is a movement dedicated to spreading
              the Divine Name and bringing devotees together through collective
              chanting.
            </p>
            <p className="mt-6 font-display text-lg tracking-[0.15em] text-amber text-glow">
              🔥 And this is only the beginning…
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
