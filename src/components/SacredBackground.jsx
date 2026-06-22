import { useMemo } from "react";
import { motion } from "framer-motion";

/** Fixed, full-page sacred atmosphere: gradients, light rays, floating embers,
 *  faint sacred geometry, and a temple-horizon silhouette. */
export default function SacredBackground() {
  const embers = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 3.5,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 18,
        drift: (Math.random() - 0.5) * 60,
        opacity: 0.15 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* Base radial warmth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, #2a160a 0%, #160c06 38%, #0d0703 72%)",
        }}
      />

      {/* Animated gold light rays from top */}
      <div className="absolute left-1/2 top-[-30%] h-[120vh] w-[140vw] -translate-x-1/2">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-0 h-full w-[12vw] origin-top"
            style={{
              transform: `translateX(-50%) rotate(${(i - 3) * 13}deg)`,
              background:
                "linear-gradient(to bottom, rgba(255,179,71,0.16), rgba(244,201,93,0.04) 45%, transparent 75%)",
              filter: "blur(14px)",
            }}
            animate={{ opacity: [0.2, 0.55, 0.2] }}
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
        className="absolute left-1/2 top-1/2 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <g
          stroke="#f4c95d"
          strokeWidth="0.6"
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
          stroke="#ffb347"
          strokeWidth="0.5"
          className="animate-spin-reverse"
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle cx="300" cy="300" r="170" />
          {[...Array(12)].map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <polygon
                key={i}
                points="300,140 320,180 280,180"
                transform={`rotate(${(i / 12) * 360} 300 300)`}
              />
            );
          })}
        </g>
      </svg>

      {/* Floating embers / particles */}
      {embers.map((e) => (
        <motion.span
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: "-5%",
            width: e.size,
            height: e.size,
            background:
              "radial-gradient(circle, rgba(255,221,150,0.95), rgba(255,140,0,0.2) 60%, transparent)",
            boxShadow: "0 0 8px rgba(255,179,71,0.7)",
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

      {/* Temple horizon silhouette at the bottom */}
      <div className="absolute inset-x-0 bottom-0">
        <div
          className="absolute inset-x-0 bottom-0 h-[40vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(255,140,0,0.12), transparent)",
          }}
        />
        <svg
          className="relative w-full"
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMidYMax meet"
          fill="#070401"
        >
          <g opacity="0.92">
            {/* central shikhara */}
            <path d="M690 240 V120 C700 96 712 70 720 50 C728 70 740 96 750 120 V240 Z" />
            <rect x="704" y="40" width="32" height="14" rx="3" />
            <circle cx="720" cy="30" r="7" />
            {/* side temples */}
            <path d="M560 240 V150 C566 132 576 112 582 100 C588 112 598 132 604 150 V240 Z" />
            <path d="M836 240 V150 C842 132 852 112 858 100 C864 112 874 132 880 150 V240 Z" />
            {/* gopuram steps left */}
            <path d="M120 240 V170 L150 150 L150 130 L200 110 L250 130 L250 150 L280 170 V240 Z" />
            {/* gopuram steps right */}
            <path d="M1160 240 V170 L1190 150 L1190 130 L1240 110 L1290 130 L1290 150 L1320 170 V240 Z" />
            {/* low rooftops */}
            <rect x="380" y="190" width="120" height="50" />
            <rect x="940" y="190" width="120" height="50" />
            <rect x="40" y="205" width="80" height="35" />
            <rect x="1320" y="205" width="80" height="35" />
          </g>
        </svg>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(5,2,0,0.65) 100%)",
        }}
      />
    </div>
  );
}
