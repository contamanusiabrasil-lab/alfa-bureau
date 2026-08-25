/**
 * SectionHeading — padrão editorial: eyebrow + régua dourada + título Fraunces.
 */
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls} max-w-2xl`}>
      <span
        className={`eyebrow flex items-center gap-3 ${
          dark ? "text-gold-400" : "text-royal-600"
        }`}
      >
        <span className="gold-rule" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.12] font-semibold tracking-[-0.015em] ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-[1.05rem] leading-relaxed ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
