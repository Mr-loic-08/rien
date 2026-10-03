import { useEffect, useState } from "react";
import "./pages.css";
import "./secteurs.css";
import "./ressources.css";
import "./contact.css";
import "./entreprise.css";
import "./mobile.css";
import Sprite, { Ic } from "./components/Sprite";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import ClientsShowcase from "./components/ClientsShowcase";
import { Cta, Partner, Sectors, Solutions, Stats } from "./components/Sections";
import Footer from "./components/Footer";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetail from "./pages/SolutionDetail";
import SecteursPage from "./pages/SecteursPage";
import SecteurDetail from "./pages/SecteurDetail";
import RessourcesPage from "./pages/RessourcesPage";
import GenieLogicielPage from "./pages/GenieLogicielPage";
import ContactPage from "./pages/ContactPage";
import DemoPage from "./pages/DemoPage";
import PrivacyPage from "./pages/PrivacyPage";
import EntreprisePage from "./pages/EntreprisePage";
import EntrepriseDetail from "./pages/EntrepriseDetail";
import { getSolution } from "./data/solutions";
import { getSecteur } from "./data/secteurs";
import { useHashRoute, type Route } from "./router";

function routeKey(r: Route) {
  return r.name === "solution"
    ? `solution:${r.key}`
    : r.name === "secteur"
      ? `secteur:${r.key}`
      : r.name === "entreprise-detail"
        ? `entreprise-detail:${r.key}`
        : r.name;
}

export default function App() {
  const [top, setTop] = useState(false);
  const route = useHashRoute();

  /* V17.3 — thème clair unique : nettoie les anciens réglages dark mode. */
  useEffect(() => {
    document.documentElement.classList.remove("dark-theme");
    document.documentElement.style.colorScheme = "light";
    localStorage.removeItem("itech-theme");
  }, []);

  /* Titre + position de scroll à chaque changement de route */
  useEffect(() => {
    if (route.name === "solutions") {
      document.title = "Solutions — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "solution") {
      document.title = `${getSolution(route.key).name} — I-TECH Solutions`;
      window.scrollTo({ top: 0 });
    } else if (route.name === "secteurs") {
      document.title = "Secteurs / Cibles — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "secteur") {
      document.title = `${getSecteur(route.key).label} — I-TECH Secteurs`;
      window.scrollTo({ top: 0 });
    } else if (route.name === "ressources") {
      document.title = "Actualités & Ressources — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "contact") {
      document.title = "Contact & Support — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "demo") {
      document.title = "Contact / Démo — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "privacy") {
      document.title = "Politique de confidentialité — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "entreprise") {
      document.title = "L'Entreprise — I-TECH";
      window.scrollTo({ top: 0 });
    } else if (route.name === "entreprise-detail") {
      document.title = `${route.key === "apropos" ? "À propos" : route.key === "carrieres" ? "Carrières" : "Partenaires"} — I-TECH`;
      window.scrollTo({ top: 0 });
    } else {
      document.title = "I-TECH — Transformation digitale financière";
      const h = window.location.hash;
      if (h && !h.startsWith("#/")) {
        const id = h.slice(1);
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 60);
        });
      }
    }
  }, [route]);

  /* Reveal rejoué à chaque vue */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [routeKey(route)]);

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* V6 — profondeur et mouvement global liés au scroll, sans modifier le contenu */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section, #root > section, .pg > section"));
    let decorativeSceneIndex = 0;
    sections.forEach((section) => {
      section.classList.add("itech-scene");

      /*
       * Lisibilité : ne jamais remplacer un fond explicitement conçu pour un bloc.
       * Avant V9, data-scene pouvait transformer un bloc bleu foncé en fond clair
       * tout en gardant son texte blanc (ou l'inverse). On applique désormais les
       * fonds alternés uniquement aux sections réellement transparentes.
       */
      const style = window.getComputedStyle(section);
      const bgImage = style.backgroundImage;
      const bgColor = style.backgroundColor;
      const hasBgImage = bgImage && bgImage !== "none";
      const colorMatch = bgColor.match(/rgba?\(([^)]+)\)/);
      const colorParts = colorMatch ? colorMatch[1].split(",").map((v) => v.trim()) : [];
      const alpha = colorParts.length >= 4 ? Number(colorParts[3]) : (colorParts.length >= 3 ? 1 : 0);
      const hasBgColor = Number.isFinite(alpha) && alpha > 0.02;

      if (!hasBgImage && !hasBgColor) {
        section.dataset.scene = String(decorativeSceneIndex % 4);
        decorativeSceneIndex += 1;
      } else {
        delete section.dataset.scene;
        section.dataset.surface = "native";
      }
    });
    if (reduce) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      document.documentElement.style.setProperty("--page-scroll", String(window.scrollY));
      sections.forEach((section) => {
        const r = section.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (vh * .5 - (r.top + r.height * .5)) / Math.max(vh, r.height)));
        section.style.setProperty("--scene-progress", progress.toFixed(3));
      });
    };
    const onSceneScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onSceneScroll, { passive: true });
    window.addEventListener("resize", onSceneScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onSceneScroll);
      window.removeEventListener("resize", onSceneScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [routeKey(route)]);

  return (
    <>
      <Sprite />
      <Header />
      {route.name === "home" && (
        <>
          <Hero />
          <Solutions />
          <Sectors />
          <Stats />
          <Trust />
          <ClientsShowcase />
          <Partner />
          <Cta />
        </>
      )}
      {route.name === "solutions" && <SolutionsPage />}
      {route.name === "solution" && (route.key === "genie-logiciel" ? <GenieLogicielPage /> : <SolutionDetail sol={getSolution(route.key)} />)}
      {route.name === "secteurs" && <SecteursPage />}
      {route.name === "secteur" && <SecteurDetail secteur={getSecteur(route.key)} />}
      {route.name === "ressources" && <RessourcesPage />}
      {route.name === "contact" && <ContactPage />}
      {route.name === "demo" && <DemoPage />}
      {route.name === "privacy" && <PrivacyPage />}
      {route.name === "entreprise" && <EntreprisePage />}
      {route.name === "entreprise-detail" && <EntrepriseDetail page={route.key} />}
      <Footer videoBackground={route.name === "home"} />

      <button
        className={`to-top ${top ? "show" : ""}`}
        aria-label="Haut de page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Ic id="i-arrow" />
      </button>
    </>
  );
}
