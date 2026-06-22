import Reveal from "./Reveal";

function CompanySeal() {
  return (
    <div className="relative grid h-44 w-44 shrink-0 place-items-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow drop-glow">
        <defs>
          <path id="sealPath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text fill="#f4c95d" fontSize="13" letterSpacing="3" fontFamily="'Cinzel', serif">
          <textPath href="#sealPath" startOffset="0">
            • SRINISHTHA TECHNOLOGIES • SERVING SACRED HERITAGE
          </textPath>
        </text>
      </svg>
      <div className="grid h-28 w-28 place-items-center rounded-full border border-gold/40 bg-gradient-to-br from-bg-2 to-bg">
        <span className="font-deva text-4xl text-saffron-gradient">ॐ</span>
      </div>
      <div className="absolute inset-2 rounded-full border border-dashed border-gold/20" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <Reveal>
          <div className="glass gold-hairline mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-[2rem] p-10 text-center md:flex-row md:text-left">
            <CompanySeal />
            <div>
              <span className="eyebrow">About the Company</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-700 text-gold-gradient">
                Srinishtha Technologies Pvt. Ltd.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Building technology that serves India's spiritual and cultural
                heritage with respect, privacy, and care. Vachika Lekhini is our
                offering to every devotee who walks the path of the sacred name.
              </p>
              <p className="mt-5 font-serif-elegant text-xl italic text-amber">
                Where ancient devotion meets modern craftsmanship.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
