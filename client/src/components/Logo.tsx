/**
 * Logo Alfa Bureau — marca oficial original (círculo "Desde 1998" + wordmark + amarelo).
 * Duas versões tratadas a partir do PNG oficial do site:
 *  - light: wordmark branco, para o header sobre fundo navy
 *  - dark: wordmark preto, para o header após scroll (fundo branco) e footer claro
 */
interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const src =
    variant === "light"
      	? "/images/logo-light.png"
	: "/images/logo-dark.png";
  return (
    <a href="#inicio" className="flex items-center gap-3 group" aria-label="Alfa Bureau — Início">
      <img
        src={src}
        alt="Alfa Bureau Contabilidade — desde 1998"
        className={`${compact ? "h-10" : "h-12"} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </a>
  );
}
