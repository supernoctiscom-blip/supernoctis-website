import { products } from "../data/content";
import { useReveal } from "../hooks/useReveal";

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
            Everything below is built and maintained by Noctis — proof we can
            carry a product past launch, not just to it.
          </p>
        </div>

        <div className="lab-grid reveal" ref={gridRef}>
          {products.map((p) => (
            <div
              className="specimen"
              key={p.name}
              style={{ ["--glow" as string]: p.glow, ["--edge" as string]: p.edge }}
            >
              <span className="tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="status">
                <span className="led" />
                BUILT & MAINTAINED BY NOCTIS
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
