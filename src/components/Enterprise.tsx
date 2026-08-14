import { enterpriseRows } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Enterprise() {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section className="enterprise pad" id="enterprise">
      <div className="wrap ent-grid">
        <div className="reveal" ref={leftRef}>
          <div className="eyebrow">FOR COMPANIES & INSTITUTIONS</div>
          <h2>Not just apps for users — systems for organizations.</h2>
          <p>
            Alongside consumer products, Noctis builds for teams that need
            software woven into how they already operate: internal tools,
            learning infrastructure, and AI systems trained on their own
            data.
          </p>
        </div>
        <div className="ent-list reveal" ref={rightRef}>
          {enterpriseRows.map((row) => (
            <div className="ent-row" key={row.label}>
              <span>{row.label}</span>
              <span>{row.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
