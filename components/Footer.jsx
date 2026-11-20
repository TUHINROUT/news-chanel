import Logo from "./Logo";
import { Facebook, X, YouTube, Instagram, LinkedIn, Apple, Play } from "./Icons";
import { footerCols, legalLinks } from "@/data/home";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <Logo footer />
          {footerCols.map((c) => (
            <div key={c.title}>
              <h6>{c.title}</h6>
              <ul>{c.links.map((l) => (<li key={l}><a href="#">{l}</a></li>))}</ul>
            </div>
          ))}
          <div>
            <h6>Follow Us</h6>
            <div className="social">
              <a href="#" aria-label="Facebook"><Facebook width="17" height="17" /></a>
              <a href="#" aria-label="X"><X width="17" height="17" /></a>
              <a href="#" aria-label="YouTube"><YouTube width="17" height="17" /></a>
              <a href="#" aria-label="Instagram"><Instagram width="17" height="17" /></a>
              <a href="#" aria-label="LinkedIn"><LinkedIn width="17" height="17" /></a>
            </div>
          </div>
          <div>
            <h6>Download Our App</h6>
            <p className="foot-muted">Get the latest news on the go.</p>
            <div className="stores">
              <a href="#" className="store"><Apple /><span><small>Download on the</small>App Store</span></a>
              <a href="#" className="store"><Play /><span><small>GET IT ON</small>Google Play</span></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Daily Express. All rights reserved.</span>
          <div>{legalLinks.map((l) => (<a key={l} href="#">{l}</a>))}</div>
        </div>
      </div>
    </footer>
  );
}
