import { useState } from "react";
import { useLanguage } from "../i18n";

const CLIENT_LOGOS = [
  { src: "images/clients/client-01.png", alt: "Logo client I-TECH" },
  { src: "images/clients/mupeci.png", alt: "MUPECI" },
  { src: "images/clients/camccul.png", alt: "CamCCUL" },
  { src: "images/clients/safi.png", alt: "SAFI" },
  { src: "images/clients/figec.png", alt: "FIGEC" },
  { src: "images/clients/mitaccul.png", alt: "MitaCCUL" },
  { src: "images/clients/bapccul.png", alt: "BAPCCUL" },
  { src: "images/clients/cpcd.png", alt: "CPCD" },
  { src: "images/clients/cepac.png", alt: "CEPAC" },
];
const makeRow=(offset:number)=>{const a=[...CLIENT_LOGOS.slice(offset),...CLIENT_LOGOS.slice(0,offset)];return [...a,...a]};
function ClientRow({offset,reverse=false,speed=34}:{offset:number;reverse?:boolean;speed?:number}){
 return <div className="client-wall-row-wrap"><button className="client-wall-arrow" aria-label="Précédent">‹</button><div className="client-wall-viewport"><div className={`client-wall-track ${reverse?"is-reverse":""}`} style={{"--client-speed":`${speed}s`} as React.CSSProperties}>{makeRow(offset).map((logo,index)=><div className={`client-wall-card ${logo.alt==="BAPCCUL"?"is-bapccul":""}`} key={`${offset}-${logo.src}-${index}`}><img src={logo.src} alt={index<CLIENT_LOGOS.length?logo.alt:""} aria-hidden={index>=CLIENT_LOGOS.length} loading="lazy"/><span className="client-logo-name">{logo.alt}</span></div>)}</div></div><button className="client-wall-arrow" aria-label="Suivant">›</button></div>
}
export default function ClientsShowcase(){
 const{t}=useLanguage(); const[showAll,setShowAll]=useState(false);
 return <section className="clients-showcase client-wall reveal" id="nos-clients">
  <div className="clients-photo-bg" aria-hidden="true"/><div className="clients-showcase-bg" aria-hidden="true"><span className="clients-orb clients-orb-a"/><span className="clients-orb clients-orb-b"/><span className="clients-lines"/><span className="client-wall-focus"/><span className="client-world-dots"/></div>
  <div className="container clients-showcase-inner client-premium-head"><div className="client-side-note"><b>DES<br/>PARTENARIATS<br/>DURABLES</b><span>POUR UN AVENIR<br/>INNOVANT</span></div><div className="clients-showcase-head"><span className="sec-kicker light">— {t("Nos clients")} —</span><h2>Ils nous font <em>confiance</em></h2><p>Des institutions financières, entreprises et organisations qui avancent avec nous depuis plus de 19 ans.</p></div><div className="client-count"><strong>50+</strong><span>Clients de confiance</span></div></div>
  <div className="client-wall-stage" aria-label={t("Nos Clients")}><ClientRow offset={0} speed={38}/><ClientRow offset={4} reverse speed={43}/></div>
  <div className="client-wall-cta"><button type="button" className="client-all-btn" onClick={()=>setShowAll(true)}>Voir tous nos clients <span>→</span></button></div>
  <div className="container client-values"><div><b>♢ Confiance</b><span>Des partenariats solides</span></div><div><b>▥ Performance</b><span>Des résultats concrets</span></div><div><b>♙ Croissance</b><span>Un développement partagé</span></div><div><b>☆ Innovation</b><span>Toujours plus loin ensemble</span></div></div>
  {showAll&&<div className="clients-gallery-overlay" role="dialog" aria-modal="true" aria-label="Tous nos clients" onMouseDown={(e)=>{if(e.currentTarget===e.target)setShowAll(false)}}><div className="clients-gallery-panel"><button className="clients-gallery-close" onClick={()=>setShowAll(false)} aria-label="Fermer">×</button><div className="clients-gallery-title"><span>— NOS CLIENTS —</span><h3>Tous ceux qui nous font <em>confiance</em></h3><p>Découvrez les institutions et organisations qui accompagnent l’écosystème I-TECH.</p></div><div className="clients-gallery-grid">{CLIENT_LOGOS.map((logo)=><div className={`clients-gallery-card ${logo.alt==="BAPCCUL"?"is-bapccul":""}`} key={logo.src}><img src={logo.src} alt={logo.alt}/><strong>{logo.alt}</strong></div>)}</div></div></div>}
 </section>
}
