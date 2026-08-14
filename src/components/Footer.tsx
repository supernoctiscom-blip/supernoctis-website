import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <p>
              A software studio building apps, websites, AI models and
              everything in between — for founders, businesses and
              institutions.
            </p>
          </div>
          <div className="foot-col">
            <h4>Studio</h4>
            <ul>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#work">Fluencyo AI</a></li>
              <li><a href="#work">Aira</a></li>
              <li><a href="#work">Credli</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@supernoctis.com">hello@supernoctis.com</a></li>
              <li><a href="#contact">Start a project</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} SuperNoctis. All rights reserved.</span>
          <span>Built in the lab, not a template.</span>
        </div>
      </div>
    </footer>
  );
}