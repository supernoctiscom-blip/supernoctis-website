import { capabilities } from "../data/capabilities";
import { useReveal } from "../hooks/useReveal";
import CapabilityIcon from "./CapabilityIcon";

export default function Capabilities() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="pad" id="capabilities">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="eyebrow">WHAT WE BUILD</div>
          <h2>One studio, every layer of the stack.</h2>
          <p>
            No handing you off between an "app team" and an "AI team." The
            same people scope it, build it, and stay on after launch.
          </p>
        </div>

        <div className="cap-grid reveal" ref={gridRef}>
          {capabilities.map((cap) => (
            <div className="cap-card" key={cap.title}>
              <CapabilityIcon name={cap.icon} />
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
