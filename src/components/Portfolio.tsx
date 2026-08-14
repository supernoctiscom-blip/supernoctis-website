import type { MouseEvent } from "react";
import { products } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function handleTilt(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(700px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-6px)`;
}

function resetTilt(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "";
}

export default function Portfolio() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="pad tight" id="work">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">FROM THE LAB</div>
          <h2>Products we've shipped and still run.</h2>
          <p>
            Everything below is built and maintained by SuperNoctis — proof
            we can carry a product past launch, not just to it.
          </p>
        </div>

        <div className="lab-grid reveal" ref={gridRef}>
          {products.map((p) => (
            <div
              className="specimen"
              key={p.name}
              style={{ ["--glow" as string]: p.glow, ["--edge" as string]: p.edge }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <span className="tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="status">
                <span className="led" />
                BUILT & MAINTAINED BY SUPERNOCTIS
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}