type ArtProps = { className?: string };

const MAP: Record<string, string> = {
  "core-banking": "s-core",
  "collecte-journaliere": "s-collecte",
  "digital-mobile": "s-mobile",
  "gestion-rh": "s-rh",
  "declaration-bancaire": "s-decl",
  "genie-logiciel": "s-genie",
};

export default function SolutionArt({ id, className = "sol-art" }: { id: string; className?: string }) {
  const symbol = MAP[id];
  if (!symbol) return null;
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <use href={`#${symbol}`} />
    </svg>
  );
}
