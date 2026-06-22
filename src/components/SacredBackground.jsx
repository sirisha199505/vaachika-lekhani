import { useMemo } from "react";
import { motion } from "framer-motion";

/** Fixed, full-page sacred atmosphere — light "dawn at the temple" mood:
 *  warm parchment sky, soft sun rays, drifting golden motes, faint sacred
 *  geometry, and a warm temple-horizon silhouette. */
export default function SacredBackground() {
  const motes = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 12,
        duration: 16 + Math.random() * 18,
        drift: (Math.random() - 0.5) * 60,
        opacity: 0.12 + Math.random() * 0.28,
      })),
    []
  );

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#fbf3e3" }}>
      {/* Dawn wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, #fff6e2 0%, #fdeccf 38%, #f6e3c4 72%)",
        }}
      />

      {/* Soft sun rays from top */}
      <div className="absolute left-1/2 top-[-30%] h-[120vh] w-[140vw] -translate-x-1/2">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-0 h-full w-[12vw] origin-top"
            style={{
              transform: `translateX(-50%) rotate(${(i - 3) * 13}deg)`,
              background:
                "linear-gradient(to bottom, rgba(255,179,71,0.18), rgba(210,84,26,0.05) 45%, transparent 75%)",
              filter: "blur(16px)",
            }}
            animate={{ opacity: [0.18, 0.4, 0.18] }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Faint rotating sacred geometry (mandala rings) */}
      <svg
        className="absolute left-1/2 top-1/2 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <g
          stroke="#b07d18"
          strokeWidth="0.7"
          className="animate-spin-slow"
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle cx="300" cy="300" r="290" />
          <circle cx="300" cy="300" r="230" />
          {[...Array(24)].map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={300 + Math.cos(a) * 230}
                y1={300 + Math.sin(a) * 230}
                x2={300 + Math.cos(a) * 290}
                y2={300 + Math.sin(a) * 290}
              />
            );
          })}
        </g>
        <g
          stroke="#d2541a"
          strokeWidth="0.6"
          className="animate-spin-reverse"
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle cx="300" cy="300" r="170" />
          {[...Array(12)].map((_, i) => (
            <polygon
              key={i}
              points="300,140 320,180 280,180"
              transform={`rotate(${(i / 12) * 360} 300 300)`}
            />
          ))}
        </g>
      </svg>

      {/* Drifting golden motes */}
      {motes.map((e) => (
        <motion.span
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: "-5%",
            width: e.size,
            height: e.size,
            background:
              "radial-gradient(circle, rgba(210,140,40,0.9), rgba(210,84,26,0.2) 60%, transparent)",
          }}
          animate={{
            y: ["0vh", "-108vh"],
            x: [0, e.drift, 0],
            opacity: [0, e.opacity, e.opacity, 0],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Ayodhya Ram Mandir horizon — hand-drawn Nagara silhouette */}
      <div className="absolute inset-x-0 bottom-0">
        <div
          className="absolute inset-x-0 bottom-0 h-[42vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(226,140,43,0.22), rgba(244,201,93,0.08) 45%, transparent)",
          }}
        />
        <svg
          className="relative w-full"
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMidYMax meet"
          fill="#caa15a"
        >
          <g opacity="0.55">
            {/* stepped plinth */}
            <rect x="372" y="222" width="696" height="18" />
            <rect x="404" y="204" width="632" height="20" />
            {/* pillared hall hint */}
            {[...Array(15)].map((_, i) => (
              <rect key={i} x={426 + i * 40} y="190" width="6" height="16" />
            ))}
            {/* seven shikharas, graduating to the central vimana */}
            {[
              [486, 74, 60],
              [566, 102, 72],
              [650, 130, 84],
              [720, 160, 104],
              [790, 130, 84],
              [874, 102, 72],
              [954, 74, 60],
            ].map(([x, h, w]) => {
              const b = 192;
              const ay = b - h;
              return (
                <g key={x}>
                  <path
                    d={`M${x - w / 2} ${b} C ${x - w / 2} ${b - h * 0.42} ${x - w * 0.15} ${b - h * 0.9} ${x} ${ay} C ${x + w * 0.15} ${b - h * 0.9} ${x + w / 2} ${b - h * 0.42} ${x + w / 2} ${b} Z`}
                  />
                  <circle cx={x} cy={ay - 5} r="3.4" />
                  <line x1={x} y1={ay} x2={x} y2={ay - 9} stroke="#caa15a" strokeWidth="2" />
                </g>
              );
            })}
            {/* central dhwaja (flag) */}
            <line x1="720" y1="20" x2="720" y2="32" stroke="#caa15a" strokeWidth="2.5" />
            <path d="M720 20 l20 6 l-20 6 Z" />
            {/* distant minor shrines */}
            <rect x="150" y="214" width="110" height="26" />
            <rect x="1180" y="214" width="110" height="26" />
          </g>
        </svg>
      </div>

      {/* Light top vignette so the nav reads */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 30%, transparent 60%, rgba(180,128,31,0.08) 100%)",
        }}
      />
    </div>
  );
}
