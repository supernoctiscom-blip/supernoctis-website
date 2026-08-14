export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" className="logo" onClick={onClick}>
      <span className="dot" />
      <span className="logo-word">
        <span className="logo-super">Super</span>
        <span className="logo-noctis">Noctis</span>
      </span>
    </a>
  );
}