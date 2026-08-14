import { processSteps } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Process() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section className="pad" id="process">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">HOW A PROJECT STARTS</div>
          <h2>Five steps from brief to launch.</h2>
        </div>

        <div className="process-list reveal" ref={listRef}>
          {processSteps.map((step) => (
            <div className="p-step" key={step.num}>
              <div className="p-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
