import Reveal from "./Reveal";

/** Consistent luxury section header: eyebrow + display title + optional kicker. */
export default function SectionHeading({
  eyebrow,
  title,
  deva,
  intro,
  align = "center",
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <div className="divider-glyph">
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      {deva && (
        <Reveal delay={0.05}>
          <p className="font-deva text-2xl md:text-3xl text-amber/90">{deva}</p>
        </Reveal>
      )}
      <Reveal delay={0.1} as="h2">
        <span className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-gold-gradient">
          {title}
        </span>
      </Reveal>
      {intro && (
        <Reveal delay={0.18}>
          <p className="font-serif-elegant text-xl md:text-2xl text-muted leading-relaxed">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
