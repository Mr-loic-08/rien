import { useEffect, useState } from "react";

/* Carrousel de fond : 3 photos qui s'enchaînent en fondu + Ken Burns.
   Repli local silencieux si une image externe ne charge pas. */
export default function HeroBg({
  images,
  fallback = "images/about.jpg",
  tint = "light",
  showDots = true,
}: {
  images: string[];
  fallback?: string;
  tint?: "light" | "dark";
  showDots?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const slides = images.length ? images : [fallback];

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className={`pg-hero-bg tint-${tint}`} aria-hidden="true">
      {slides.map((src, i) => (
        <div
          key={src + i}
          className={`pg-hero-slide ${i === idx ? "on" : ""}`}
          style={{ backgroundImage: `url('${src}'), url('${fallback}')` }}
        />
      ))}
      <div className="pg-hero-veil" />
      <div className="pg-hero-mesh" />
      {showDots && slides.length > 1 && (
        <div className="pg-hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === idx ? "on" : ""}
              aria-label={`Image ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
