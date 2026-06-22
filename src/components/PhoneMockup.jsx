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

          {/* hero deity scene — fully inside the SVG so it scales with the phone */}
          <div className="relative mx-3 h-[220px] overflow-hidden rounded-2xl">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 320 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="sky" cx="50%" cy="40%" r="75%">
                  <stop offset="0%" stopColor="#ffd98a" />
                  <stop offset="26%" stopColor="#ff8c1a" />
                  <stop offset="58%" stopColor="#a84200" />
                  <stop offset="100%" stopColor="#2a1304" />
                </radialGradient>
                <radialGradient id="sun" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fff8e1" />
                  <stop offset="45%" stopColor="rgba(255,224,150,0.65)" />
                  <stop offset="100%" stopColor="rgba(255,179,71,0)" />
                </radialGradient>
              </defs>

              {/* sky + divine sun (behind the figure) */}
              <rect width="320" height="220" fill="url(#sky)" />
              <circle cx="160" cy="96" r="62" fill="url(#sun)" className="animate-pulse-glow" />

              {/* temple horizon */}
              <g fill="#1f0d02">
                {/* central spire behind Rama */}
                <path d="M160 220 V108 q5 -22 9 -34 q4 12 9 34 V220 Z" opacity="0.85" />
                <circle cx="169" cy="70" r="3" opacity="0.85" />
                {/* left temple cluster */}
                <path d="M44 220 V146 l16 -12 v-10 l20 -12 l20 12 v10 l16 12 V220 Z" />
                <path d="M98 220 V168 l11 -9 v-7 l15 -9 l15 9 v7 l11 9 V220 Z" />
                {/* right temple cluster */}
                <path d="M232 220 V146 l16 -12 v-10 l20 -12 l20 12 v10 l16 12 V220 Z" />
                <path d="M184 220 V170 l10 -8 v-6 l13 -8 l13 8 v6 l10 8 V220 Z" />
                {/* far rooftops */}
                <rect x="0" y="188" width="44" height="32" />
                <rect x="276" y="188" width="44" height="32" />
              </g>

              {/* flags */}
              <g stroke="#ffd27a" strokeWidth="1.4">
                <line x1="80" y1="118" x2="80" y2="146" />
                <line x1="240" y1="118" x2="240" y2="146" />
              </g>
              <path d="M80 119 l13 4 l-13 4 Z" fill="#ff8c00" />
              <path d="M240 119 l-13 4 l13 4 Z" fill="#ff8c00" />

              {/* halo behind Sri Rama */}
              <circle cx="158" cy="98" r="17" fill="none" stroke="#ffe1a3" strokeWidth="1.6" opacity="0.9" />

              {/* Sri Rama silhouette holding a bow */}
              <g fill="#080401">
                {/* flowing robe */}
                <path d="M142 214 C145 176 150 150 152 134 L165 134 C167 150 172 176 175 214 Z" />
                {/* torso */}
                <path d="M150 138 C150 124 166 124 166 138 Z" />
                <ellipse cx="158" cy="124" rx="13" ry="7" />
                {/* head */}
                <circle cx="158" cy="104" r="8.5" />
                {/* tall crown (kireeta) */}
                <path d="M149 100 Q158 74 167 100 Z" />
                <path d="M158 72 L156 84 L160 84 Z" />
                {/* arm reaching to the bow */}
                <path d="M166 126 L188 150" stroke="#080401" strokeWidth="4.5" strokeLinecap="round" />
              </g>

              {/* bow + string */}
              <path d="M189 96 Q210 152 189 208" fill="none" stroke="#0a0502" strokeWidth="3.2" />
              <line x1="189" y1="96" x2="189" y2="208" stroke="#5a2e0a" strokeWidth="1" />

              {/* draped mala (prayer beads) */}
              <path
                d="M252 70 Q288 100 278 150 Q274 172 252 182"
                fill="none"
                stroke="#a5611f"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeDasharray="0.5 8.5"
              />
              <g stroke="#caa15a" strokeWidth="1.5" strokeLinecap="round">
                <line x1="252" y1="182" x2="250" y2="198" />
                <line x1="252" y1="182" x2="254" y2="198" />
                <line x1="252" y1="182" x2="248" y2="196" />
              </g>
              <circle cx="252" cy="180" r="3.4" fill="#d59a3a" />
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
