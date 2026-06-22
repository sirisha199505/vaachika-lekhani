import BrandMark from "./BrandMark";

/** A premium phone showing the Vachika Lekhini app — pure CSS/SVG, no images.
 *  Scene mirrors the brand reference: Sri Rama with bow at sunset, draped mala,
 *  temple horizon, and the राम नाम mantra. */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[200px] sm:w-[240px] lg:w-[288px]">
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
          <div className="flex items-center gap-3 px-5 pt-2 pb-2">
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
          <p className="pb-3 text-center text-[9px] tracking-[0.28em] text-amber/80">
            CHANT. COUNT. CONNECT.
          </p>

          {/* hero deity scene */}
          <div className="relative mx-3 h-[220px] overflow-hidden rounded-2xl">
            {/* sunset sky */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 55% at 50% 34%, #ffcf7a 0%, #ff8c1a 28%, #b34700 55%, #3a1c06 85%)",
              }}
            />
            {/* sun */}
            <div
              className="absolute left-1/2 top-7 h-24 w-24 -translate-x-1/2 rounded-full animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,248,225,0.98), rgba(255,179,71,0.35) 55%, transparent 75%)",
              }}
            />

            {/* scene */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 320 220"
              preserveAspectRatio="xMidYMax meet"
            >
              {/* temple horizon */}
              <g fill="#240f02">
                {/* central shikhara behind Rama */}
                <path d="M160 220 V96 q8 -26 12 -38 q4 12 12 38 V220 Z" opacity="0.9" />
                {/* left temples */}
                <path d="M44 220 V150 l14 -10 v-9 l18 -11 l18 11 v9 l14 10 V220 Z" />
                <path d="M96 220 V165 l10 -8 v-7 l14 -8 l14 8 v7 l10 8 V220 Z" />
                {/* right temples */}
                <path d="M232 220 V150 l14 -10 v-9 l18 -11 l18 11 v9 l14 10 V220 Z" />
                <path d="M188 220 V168 l9 -7 v-6 l12 -7 l12 7 v6 l9 7 V220 Z" />
                {/* low rooftops */}
                <rect x="0" y="196" width="40" height="24" />
                <rect x="280" y="196" width="40" height="24" />
              </g>

              {/* flags on temples */}
              <g stroke="#ffd27a" strokeWidth="1.3">
                <line x1="76" y1="120" x2="76" y2="150" />
                <line x1="244" y1="120" x2="244" y2="150" />
              </g>
              <path d="M76 121 l12 4 l-12 4 Z" fill="#ff8c00" />
              <path d="M244 121 l-12 4 l12 4 Z" fill="#ff8c00" />

              {/* Sri Rama silhouette holding a bow */}
              <g fill="#0a0502">
                {/* robe / body */}
                <path d="M150 215 q-6 -42 4 -64 q3 -8 6 -10 q3 2 6 10 q10 22 4 64 Z" />
                {/* shoulders */}
                <ellipse cx="160" cy="142" rx="13" ry="7" />
                {/* head */}
                <circle cx="160" cy="128" r="7.5" />
                {/* crown */}
                <path d="M153 122 l7 -10 l7 10 Z" />
              </g>
              {/* halo */}
              <circle cx="160" cy="127" r="13" fill="none" stroke="#ffe1a3" strokeWidth="1.4" opacity="0.85" />
              {/* bow + string (held to his side) */}
              <path d="M183 116 Q201 160 183 204" fill="none" stroke="#1a0c02" strokeWidth="3" />
              <line x1="183" y1="116" x2="183" y2="204" stroke="#3a1c06" strokeWidth="1" />
              {/* arm to bow */}
              <line x1="168" y1="150" x2="183" y2="160" stroke="#0a0502" strokeWidth="4" strokeLinecap="round" />

              {/* draped mala (prayer beads) on the right */}
              <path
                d="M250 70 Q278 96 270 140 Q266 162 248 172"
                fill="none"
                stroke="#9c5a22"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="0.5 8"
              />
              {/* mala tassel */}
              <g stroke="#caa15a" strokeWidth="1.4" strokeLinecap="round">
                <line x1="248" y1="172" x2="246" y2="186" />
                <line x1="248" y1="172" x2="250" y2="186" />
                <line x1="248" y1="172" x2="244" y2="184" />
              </g>
              <circle cx="248" cy="170" r="3.2" fill="#c98a26" />
            </svg>
          </div>

          {/* mantra block */}
          <div className="relative px-5 pt-3 text-center">
            <p
              className="font-deva text-[2.5rem] font-800 leading-none"
              style={{
                background: "linear-gradient(135deg,#ffc46b 0%,#ff6a1a 45%,#c81e00 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              राम
            </p>
            <p className="font-deva text-sm text-amber/90 -mt-1">नाम</p>
            <p className="font-deva text-[11px] text-gold mt-0.5">सर्व सुखदायी</p>
          </div>

          <div className="mx-6 my-3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <p className="px-6 text-center font-serif-elegant text-[11px] italic leading-snug text-muted">
            “The divine name purifies the heart, brings peace to the mind, and
            connects the soul to the Divine.”
          </p>

          {/* closing invocation */}
          <p className="py-4 text-center font-deva text-sm text-gold-gradient">
            ॥ श्री राम ॥
          </p>
        </div>
      </div>
    </div>
  );
}
