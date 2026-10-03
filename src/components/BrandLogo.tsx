type BrandLogoProps = {
  className?: string;
  light?: boolean;
};

/** Logo officiel I-TECH fourni par l'entreprise. */
export default function BrandLogo({ className = "", light = false }: BrandLogoProps) {
  return (
    <span
      className={`brand-logo ${light ? "is-light" : ""} ${className}`.trim()}
      role="img"
      aria-label="I-TECH — Innovative Technology"
    >
      <img src="/images/i-tech-logo.png" alt="" aria-hidden="true" />
    </span>
  );
}
