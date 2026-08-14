const items = [
  "Mobile Apps",
  "Websites",
  "AI Chatbots",
  "Custom LLMs",
  "CRMs",
  "Fintech Systems",
  "EdTech Platforms",
  "Enterprise Tools",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}