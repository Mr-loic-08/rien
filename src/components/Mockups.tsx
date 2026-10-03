import { Ic } from "./Sprite";

/* ---------- Fil d'Ariane ---------- */
export function Crumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Fil d'Ariane">
      {trail.map((t, i) => (
        <span key={t.label} className="crumb">
          {i > 0 && <Ic id="i-chev-r" />}
          {t.href ? <a href={t.href}>{t.label}</a> : <em>{t.label}</em>}
        </span>
      ))}
    </nav>
  );
}

/* ---------- Laptop dashboard ---------- */
const BARS: Record<number, number[]> = {
  1: [38, 62, 45, 78, 55, 88, 66, 92, 58, 74],
  2: [70, 42, 82, 55, 90, 48, 76, 60, 86, 52],
  3: [52, 80, 44, 68, 92, 58, 74, 46, 84, 64],
  4: [64, 48, 76, 90, 55, 70, 84, 60, 78, 50],
  5: [46, 72, 58, 88, 66, 44, 80, 62, 74, 56],
};

export function LaptopMock({ seed = 1, url = "alpha.i-tech.com", variant }: { seed?: number; url?: string; variant?: "hr" | "report" }) {
  const bars = BARS[seed] ?? BARS[1];
  return (
    <div className="mk-laptop">
      <div className="mk-lscreen">
        <div className="mk-lbar">
          <i /><i /><i />
          <span className="mk-url">{url}</span>
        </div>
        <div className="mk-lbody">
          <div className="mk-side">
            <b /><i /><i /><i /><i /><i />
          </div>
          <div className="mk-main">
            <div className="mk-greet"><b /><span /></div>
            <div className="mk-chips"><i /><i /><i /></div>
            {variant === "hr" ? (
              <div className="mk-team">
                {[0, 1, 2].map((r) => (
                  <div className="mk-member" key={r}>
                    <span className="mk-ava" /><i className="mk-mline" /><em className="mk-mbar"><u style={{ width: `${82 - r * 18}%` }} /></em>
                  </div>
                ))}
              </div>
            ) : variant === "report" ? (
              <div className="mk-docs">
                {["COBAC", "BEAC", "Bilan"].map((d) => (
                  <div className="mk-docrow" key={d}>
                    <span className="mk-docbadge">{d}</span><i /><Ic id="i-check" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="mk-panels">
                  <div className="mk-bars">{bars.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
                  <div className="mk-donut" />
                </div>
                <div className="mk-rows"><i /><i /><i /></div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mk-lbase" />
    </div>
  );
}

/* ---------- Téléphone ---------- */
export function PhoneMock({ mode = "bank", title = "ALPHA" }: { mode?: "bank" | "collecte" | "dark"; title?: string }) {
  return (
    <div className={`mk-phone ${mode === "dark" ? "is-dark" : ""}`}>
      <div className="mk-notch" />
      <div className="mk-app">
        <div className="mk-atop"><b>{title}</b><span className="mk-ava" /></div>
        {mode === "collecte" ? (
          <>
            <div className="mk-tour"><span>Tournée du jour</span><div className="mk-ring"><b>68%</b></div></div>
            <div className="mk-clist">
              {[82, 64, 91].map((w, i) => (
                <div className="mk-crow" key={i}><span className="mk-ava sm" /><i style={{ width: `${w}%` }} /></div>
              ))}
            </div>
            <div className="mk-cta">Encaisser</div>
          </>
        ) : (
          <>
            <div className="mk-bal"><span>Solde total</span><b>12 480 000</b><em>FCFA</em></div>
            <div className="mk-ops"><i /><i /><i /><i /></div>
            <div className="mk-list"><i /><i /><i /></div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Reçu électronique ---------- */
export function ReceiptMock() {
  return (
    <div className="mk-receipt">
      <span className="mk-rok"><Ic id="i-check" /></span>
      <b>Reçu électronique</b>
      <div className="mk-rrows"><i /><i /><i /></div>
      <div className="mk-barcode" />
      <span className="mk-rtime">Payé · 12:04</span>
    </div>
  );
}

/* ---------- Compositions hero ---------- */
export function SuiteMock() {
  return (
    <div className="mk-suite">
      <LaptopMock />
      <div className="mk-suite-phone"><PhoneMock /></div>
      <div className="mk-chip c1"><Ic id="i-check" />250+ Institutions</div>
      <div className="mk-chip c2"><Ic id="i-chart" />+12% Croissance</div>
    </div>
  );
}

export function CollecteMock() {
  return (
    <div className="mk-duo">
      <PhoneMock mode="collecte" title="I-Collect" />
      <div className="mk-duo-side">
        <ReceiptMock />
        <div className="mk-chip static"><Ic id="i-swap" />Temps réel</div>
      </div>
    </div>
  );
}

export function MobileMock() {
  return (
    <div className="mk-duo">
      <PhoneMock mode="dark" title="ALPHA" />
      <div className="mk-duo-side">
        <PhoneMock title="MyCollect" />
        <div className="mk-chip static"><Ic id="i-lock" />24h/24 · 7j/7</div>
      </div>
    </div>
  );
}

/* ---------- Captures d'écran ---------- */
export function ShotDash({ seed = 1, label = "Tableau de bord" }: { seed?: number; label?: string }) {
  const bars = BARS[seed] ?? BARS[1];
  return (
    <figure className="shot sh-dash">
      <div className="shot-bar"><i /><i /><i /></div>
      <div className="shot-body">
        <div className="shot-side"><b /><i /><i /><i /></div>
        <div className="shot-main">
          <div className="shot-title"><b />{label}</div>
          <div className="shot-grid">
            <div className="mk-bars sm">{bars.slice(0, 7).map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
            <div className="mk-donut sm" />
          </div>
          <div className="mk-rows"><i /><i /></div>
        </div>
      </div>
    </figure>
  );
}

export function ShotPhone({ mode = "bank", title = "ALPHA" }: { mode?: "bank" | "collecte" | "dark"; title?: string }) {
  return (
    <figure className="shot sh-phone">
      <PhoneMock mode={mode} title={title} />
    </figure>
  );
}

export function ShotDoc() {
  return (
    <figure className="shot sh-doc">
      <div className="shot-bar"><i /><i /><i /><span className="shot-file">etat-cobac.pdf</span></div>
      <div className="shot-docbody">
        <div className="mk-docrow"><span className="mk-docbadge">COBAC</span><i /><Ic id="i-check" /></div>
        <div className="mk-docrow"><span className="mk-docbadge">BEAC</span><i /><Ic id="i-check" /></div>
        <div className="mk-docrow"><span className="mk-docbadge">Bilan</span><i /><Ic id="i-check" /></div>
        <div className="shot-stamp">Conforme</div>
      </div>
    </figure>
  );
}
