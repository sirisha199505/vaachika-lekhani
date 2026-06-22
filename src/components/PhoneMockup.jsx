import BrandMark from "./BrandMark";

/** A premium phone showing the Vachika Lekhini app — pure CSS/SVG, no images. */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[310px]">
      {/* device body */}
      <div
        className="relative rounded-[3rem] p-[3px]"
        style={{
          background:
            "linear-gradient(150deg, #5a4a2a, #1c130a 35%, #000 70%, #4a3a1f)",
          boxShadow:
            "0 50px 90px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(244,201,93,0.18), 0 0 60px -10px rgba(244,201,93,0.35)",
        }}
      >
        <div className="relative overflow-hidden rounded-[2.8rem] bg-[#0a0502]">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-ink/80">
            <span className="font-medium">10:30</span>
            <span className="tracking-tight">▮▮▮ ▾ ▰</span>
          </div>

          {/* app header */}
          <div className="flex items-center gap-3 px-5 pt-2 pb-3">
            <BrandMark size={38} rounded={11} glow={false} />
            <div className="leading-tight">
              <p className="font-display text-[15px] font-700 text-gold-gradient">
                Vaachaka
              </p>
              <p className="font-display text-[15px] font-700 -mt-1 text-gold-gradient">
                Lekhini
              </p>
            </div>
          </div>
          <p className="px-5 pb-3 text-[9px] tracking-[0.28em] text-amber/80">
            CHANT · COUNT · CONNECT
          </p>

          {/* hero deity panel */}
          <div className="relative mx-3 h-[230px] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% 20%, #ffb347 0%, #c85400 40%, #3a1c06 80%)",
              }}
            />
            {/* sun glow */}
            <div
              className="absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,240,200,0.95), rgba(255,179,71,0.2) 60%, transparent)",
              }}
            />
            {/* temple + deity silhouette */}
            <svg
              className="absolute inset-x-0 bottom-0 w-full"
              viewBox="0 0 320 150"
              fill="#1c0d03"
              preserveAspectRatio="xMidYMax meet"
            >
              <g opacity="0.95">
                <path d="M150 150 V70 q6 -20 10 -30 q4 10 10 30 V150 Z" />
                <circle cx="160" cy="34" r="4" />
                <path d="M70 150 V95 l16 -10 v-8 l20 -10 l20 10 v8 l16 10 V150 Z" />
                <path d="M210 150 V95 l16 -10 v-8 l20 -10 l20 10 v8 l16 10 V150 Z" />
                <rect x="0" y="120" width="60" height="30" />
                <rect x="260" y="120" width="60" height="30" />
              </g>
              {/* standing deity figure */}
              <g fill="#0a0502" opacity="0.85">
                <ellipse cx="160" cy="150" rx="20" ry="40" />
                <circle cx="160" cy="100" r="9" />
                <circle cx="160" cy="98" r="13" fill="none" stroke="#ffcf7a" strokeWidth="1.2" opacity="0.7" />
              </g>
            </svg>
            {/* flags */}
            <div className="absolute left-6 top-10 h-10 w-[1px] bg-amber/70" />
            <div className="absolute right-8 top-12 h-9 w-[1px] bg-amber/70" />
          </div>

          {/* mantra block */}
          <div className="px-5 pt-4 text-center">
            <p className="font-deva text-3xl font-800 text-saffron-gradient leading-none">
              राम
            </p>
            <p className="font-deva text-sm text-amber/90 -mt-1">नाम</p>
            <p className="font-deva text-[11px] text-gold mt-1">सर्व सुखदायी</p>
          </div>

          <div className="mx-5 my-3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <p className="px-6 pb-2 text-center font-serif-elegant text-[11px] italic leading-snug text-muted">
            “The divine name purifies the heart, brings peace to the mind, and
            connects the soul to the Divine.”
          </p>

          {/* tab bar */}
          <div className="mt-2 grid grid-cols-3 gap-1 border-t border-gold/15 bg-[#120a04] px-4 py-3 text-center text-[8px] text-muted/80">
            {[
              ["🎙", "Chant"],
              ["✍", "Write"],
              ["👆", "Count"],
            ].map(([icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-sm">{icon}</span>
                <span className="tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
