import { Cal, Pin, Sun, Facebook, X, YouTube, Instagram, LinkedIn } from "./Icons";
import { topLinks } from "@/data/home";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-in">
        <div className="topbar-left">
          <span><Cal /> Tue, 18 Nov 2025</span>
          <span className="sep" />
          <span><Pin /> Kampala, Uganda</span>
          <span className="sep" />
          <span><Sun /> 28°C</span>
        </div>
        <div className="topbar-right">
          {topLinks.map((l) => (<a key={l} href="#">{l}</a>))}
          <span className="sep" />
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="X"><X /></a>
          <a href="#" aria-label="YouTube"><YouTube /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
        </div>
      </div>
    </div>
  );
}
