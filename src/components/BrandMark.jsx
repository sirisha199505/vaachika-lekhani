/** The Vachika Lekhini sigil: a sacred lamp flame cradling the Om (ॐ),
 *  set in a saffron→gold rounded tile. Scales with `size`. */
export default function BrandMark({ size = 56, rounded = 16, glow = true }) {
  return (
    <div
      className="relative grid place-items-center shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: rounded,
        background:
          "linear-gradient(145deg, #ff9d1e 0%, #ff7a00 45%, #c85400 100%)",
        boxShadow: glow
          ? "0 8px 24px -6px rgba(255,140,0,0.6), inset 0 1px 0 rgba(255,230,180,0.6)"
          : "inset 0 1px 0 rgba(255,230,180,0.5)",
      }}
    >
      <svg
        width={size * 0.66}
        height={size * 0.66}
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="lampGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff3cf" />
            <stop offset="1" stopColor="#f4c95d" />
          </linearGradient>
        </defs>
        {/* outer flame teardrop */}
        <path
          d="M50 6 C66 30 84 42 84 64 a34 34 0 1 1 -68 0 C16 42 34 30 50 6 Z"
          fill="url(#lampGold)"
        />
        {/* Om mark cut into the flame */}
        <text
          x="50"
          y="74"
          textAnchor="middle"
          fontSize="46"
          fontFamily="'Noto Sans Devanagari', serif"
          fontWeight="700"
          fill="#c85400"
        >
          ॐ
        </text>
        {/* flame tip */}
        <path d="M50 0 C54 10 54 16 50 22 C46 16 46 10 50 0 Z" fill="#fff3cf" />
      </svg>
    </div>
  );
}
