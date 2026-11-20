import { Home, Chevron, Tv, Menu } from "./Icons";
import { navItems } from "@/data/home";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main">
      <div className="container navbar-in">
        <a href="#" className="nav-home" aria-label="Home"><Home /></a>
        <ul className="nav-list">
          {navItems.map((n) => (
            <li key={n.label}><a href="#">{n.label} {n.dd && <Chevron />}</a></li>
          ))}
        </ul>
        <a href="#" className="btn-red live-btn"><Tv /> Live TV</a>
        <button className="hamburger" aria-label="Menu"><Menu /></button>
      </div>
    </nav>
  );
}
