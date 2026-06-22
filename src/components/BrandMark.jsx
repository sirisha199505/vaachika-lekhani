/** The Vaachaka Lekhini app logo (gold Om-pen with mic). Scales with `size`. */
export default function BrandMark({ size = 56, rounded = 16, glow = true }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: rounded,
        boxShadow: glow
          ? "0 8px 24px -6px rgba(232,137,59,0.55), inset 0 0 0 1px rgba(255,220,160,0.35)"
          : "inset 0 0 0 1px rgba(255,220,160,0.3)",
      }}
    >
      <img
        src="/logo.jpeg"
        alt="Vaachaka Lekhini logo"
        width={size}
        height={size}
        className="h-full w-full object-cover"
        style={{ transform: "scale(1.04)" }}
      />
    </div>
  );
}
