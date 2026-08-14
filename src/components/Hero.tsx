export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">NOCTIS AI LABS · SOFTWARE STUDIO</div>
          <h1>
            We don't just consult on software.{" "}
            <span className="accent">We ship it.</span>
          </h1>
          <p className="lede">
            Apps, websites, CRMs, chatbots and custom AI models — built by the
            same studio that builds its own products. Fluencyo AI, Aira and
            Credli all started on this floor.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Pitch your project →
            </a>
            <a href="#work" className="btn btn-ghost">
              See our work
            </a>
          </div>
          <div className="hero-proof">
            <div className="proof-item">
              <b>3</b> products shipped in-house
            </div>
            <div className="proof-item">
              <b>1</b> studio, zero handoffs
            </div>
            <div className="proof-item">Consumer + B2B + Institutions</div>
          </div>
        </div>

        <div className="constellation-holder">
          <svg
            viewBox="0 0 460 460"
            width="100%"
            role="img"
            aria-label="Diagram showing Noctis AI Labs at the centre, connected to the products it has built"
          >
            <circle cx="230" cy="230" r="150" className="orbit-ring" style={{ fill: "none" }} />
            <circle cx="230" cy="230" r="95" className="orbit-ring" style={{ fill: "none" }} />

            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5EEAD4" />
                <stop offset="100%" stopColor="#8B7FFF" />
              </linearGradient>
            </defs>

            <line x1="230" y1="230" x2="230" y2="80" stroke="url(#g1)" strokeWidth="1.4" className="flow-line" />
            <line x1="230" y1="230" x2="365" y2="300" stroke="url(#g1)" strokeWidth="1.4" className="flow-line" />
            <line x1="230" y1="230" x2="95" y2="300" stroke="url(#g1)" strokeWidth="1.4" className="flow-line" />
            <line x1="230" y1="230" x2="230" y2="380" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 6" />

            {/* core node */}
            <circle cx="230" cy="230" r="30" fill="var(--ink-2)" stroke="var(--cyan)" strokeWidth="1.5" className="node-pulse" />
            <text x="230" y="235" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="#5EEAD4">NOCTIS</text>

            {/* satellite: Fluencyo */}
            <circle cx="230" cy="80" r="22" fill="var(--ink)" stroke="var(--violet)" strokeWidth="1.4" />
            <text x="230" y="85" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="#F1F2F6">FLNC</text>

            {/* satellite: Aira */}
            <circle cx="365" cy="300" r="22" fill="var(--ink)" stroke="var(--violet)" strokeWidth="1.4" />
            <text x="365" y="305" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="#F1F2F6">AIRA</text>

            {/* satellite: Credli */}
            <circle cx="95" cy="300" r="22" fill="var(--ink)" stroke="var(--violet)" strokeWidth="1.4" />
            <text x="95" y="305" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="#F1F2F6">CRDL</text>

            {/* ghost node: next product */}
            <circle cx="230" cy="380" r="16" fill="none" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="3 4" />
            <text x="230" y="384" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#666B85">NEXT</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
