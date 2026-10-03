import { useEffect, useRef, useState } from "react";
import { Ic, SOCIALS } from "./Sprite";
import { COMPANY_EXPERIENCE_YEARS } from "../data/company";
import { useLanguage } from "../i18n";

const DURATION = 6000;

/* Fond : 2 vidéos + 2 images.
   Pour utiliser vos propres vidéos, déposez hero-video1.mp4 et
   hero-video2.mp4 dans public/videos/ : elles seront lues en
   priorité, les vidéos de secours en ligne ne servant que de
   repli si les fichiers locaux sont absents. */
type Slide =
  | { type: "video"; label: string; local: string; hd: string; uhd: string; poster: string }
  | { type: "image"; label: string; src: string; fallback: string };

const SLIDES: Slide[] = [
  {
    type: "video",
    label: "Vidéo 1",
    local: "videos/hero-video1.mp4",
    hd: "https://videos.pexels.com/video-files/8643481/8643481-hd_1920_1080_24fps.mp4",
    uhd: "https://videos.pexels.com/video-files/8643481/8643481-uhd_3840_2160_24fps.mp4",
    poster:
      "https://images.pexels.com/videos/8643481/adult-business-businessman-businesswoman-8643481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  },
  {
    type: "video",
    label: "Vidéo 2",
    local: "videos/hero-video2.mp4",
    hd: "https://videos.pexels.com/video-files/8643643/8643643-hd_1920_1080_24fps.mp4",
    uhd: "https://videos.pexels.com/video-files/8643643/8643643-uhd_3840_2160_24fps.mp4",
    poster:
      "https://images.pexels.com/videos/8643643/business-businessman-businesswoman-cooperation-8643643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  },
  {
    type: "image",
    label: "Image 1",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    fallback: "images/hero-1.jpg",
  },
  {
    type: "image",
    label: "Image 2",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    fallback: "images/hero-2.jpg",
  },
];

/* Mêmes textes que l'original (hero-feats) */
const FEATS = [
  { icon: "i-cal", b: `+${COMPANY_EXPERIENCE_YEARS} ans`, s: "d'expertise" },
  { icon: "i-conf", b: "Conformité", s: "COBAC & BEAC" },
  { icon: "i-globe", b: "Solutions déployées", s: "en Afrique" },
  { icon: "i-head", b: "Support", s: "24/7" },
];

export default function Hero() {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  /* Lecture / pause des vidéos selon le slide actif */
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) v.play().catch(() => {});
      else v.pause();
    });
  }, [current]);

  /* Défilement automatique — pause au survol */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, DURATION);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="hero"
      id="accueil"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ======= EMPILEMENT DES COUCHES DE FOND ======= */}
      <div className="hero-bg" id="heroBg">
        <div className="hero-base" />

        {SLIDES.map((s, i) =>
          s.type === "video" ? (
            <div
              key={i}
              className={`slide ${i === current ? "active" : ""}`}
              data-type="video"
              style={{ backgroundImage: `url('${s.poster}')` }}
            >
              <video
                ref={(el) => {
                  videos.current[i] = el;
                }}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={s.poster}
                disablePictureInPicture
              >
                <source src={s.local} type="video/mp4" />
                <source src={s.hd} type="video/mp4" />
                <source src={s.uhd} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div
              key={i}
              className={`slide ${i === current ? "active" : ""}`}
              style={{ backgroundImage: `url('${s.src}'), url('${s.fallback}')` }}
            />
          )
        )}

        <div className="hero-ov" />
        <div className="hero-grid" />
        <div className="hero-scan" />
        <span className="hero-orb a" />
        <span className="hero-orb b" />
        <div className="hero-vig" />
        <div className="hero-noise" />
      </div>

      {/* ======= RAIL SOCIAL (couche flottante) ======= */}
      <div className="hero-social">
        {SOCIALS.map((s) => (
          <a key={s.id} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={s.label}><Ic id={s.id} /></a>
        ))}
      </div>

      {/* ======= CONTENU ======= */}
      <div className="container">
        <div className="hero-copy">
          <span className="hero-rule" />
          <h1>
            {t("Accélérez la")} <span className="grad">{t("transformation digitale")}</span> {t("de votre institution financière.")}
          </h1>
          <p className="lead">
            {t("I-TECH accompagne les banques, établissements de microfinance et entreprises avec des solutions Core Banking, Mobile Banking, Paiement Digital et Transformation Monétique adaptées aux réalités africaines.")}
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary">{t("Demander une démo")} <Ic id="i-arrow" /></a>
            <a href="#" className="btn btn-outline">{t("Découvrir nos solutions")}</a>
          </div>
        </div>

        {/* Panneau d'infos superposé : l'élément actif suit le slide en cours */}
        <div className="hero-feats">
          {FEATS.map((f, i) => (
            <div className={`hfeat ${i === current ? "active" : ""}`} key={f.b}>
              <Ic id={f.icon} />
              <div>
                <b>{f.b.startsWith("+") && lang === "en" ? `+${COMPANY_EXPERIENCE_YEARS} years` : t(f.b)}</b>
                <span>{t(f.s)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
