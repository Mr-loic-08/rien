import { useCallback, useEffect, useRef, useState } from "react";
import { Ic } from "./Sprite";
import { Crumbs } from "./Mockups";

interface HeroMedia {
  video: { hd: string; poster: string };
  heroBg: string[];
}

export default function SecteurHero({
  media,
  trail,
  eyebrow,
  title,
  intro,
  cta,
  ctaHref = "#/contact/demo",
  ghostHref,
  ghostLabel,
  children,
}: {
  media: HeroMedia;
  trail: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  ctaHref?: string;
  ghostHref?: string;
  ghostLabel?: string;
  children?: React.ReactNode;
}) {
  const [img, setImg] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoOk, setVideoOk] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const DURATION = 6000;

  const go = useCallback((i: number) => {
    setImg(((i % media.heroBg.length) + media.heroBg.length) % media.heroBg.length);
    setProgress(0);
  }, [media.heroBg.length]);

  /* progression du diaporama photo */
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DURATION);
      setProgress(p);
      if (p >= 1) go(img + 1);
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [img, go]);

  return (
    <section className="sx-hero">
      {/* fond : vidéo + diaporama photo + voiles */}
      <div className="sx-bg" aria-hidden="true">
        {videoOk && (
          <video
            ref={videoRef}
            className="sx-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={media.video.poster}
            onError={() => setVideoOk(false)}
          >
            <source src={media.video.hd} type="video/mp4" />
          </video>
        )}
        {!videoOk &&
          media.heroBg.map((src, i) => (
            <div
              key={src + i}
              className={`sx-slide ${i === img ? "on" : ""}`}
              style={{ backgroundImage: `url('${src}'), url('images/about.jpg')` }}
            />
          ))}
        <div className="sx-veil" />
        <div className="sx-grain" />
      </div>

      <div className="container">
        <Crumbs trail={trail} />
        <div className="sx-grid">
          <div className="sx-copy">
            <span className="sx-eyebrow"><Ic id="i-layers" />{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="hero-actions">
              <a href={ctaHref} className="btn btn-primary">{cta} <Ic id="i-arrow" /></a>
              {ghostHref && ghostLabel && (
                <a href={ghostHref} className="btn btn-glass">{ghostLabel}</a>
              )}
            </div>
            {children}
          </div>

          {/* carte photo incrustée : diaporama synchronisé */}
          <div className="sx-card">
            <div className="sx-frames">
              {media.heroBg.map((src, i) => (
                <div
                  key={src + i}
                  className={`sx-frame ${i === img ? "on" : ""}`}
                  style={{ backgroundImage: `url('${src}'), url('images/about.jpg')` }}
                />
              ))}
              <span className="sx-live"><i />En direct du terrain</span>
            </div>
            <div className="sx-cardbar">
              <div className="sx-thumbs">
                {media.heroBg.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    aria-label={`Photo ${i + 1}`}
                    className={i === img ? "on" : ""}
                    onClick={() => go(i)}
                  >
                    <img src={src} alt="" loading="lazy" onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "images/about.jpg";
                    }} />
                  </button>
                ))}
              </div>
              <div className="sx-prog"><i style={{ width: `${progress * 100}%` }} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sx-cut" aria-hidden="true" />
    </section>
  );
}
