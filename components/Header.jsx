import Logo from "./Logo";

export default function Header() {
  return (
    <header className="container header">
      <Logo />
      <div className="top-ad" style={{ backgroundImage: "linear-gradient(90deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.92) 55%), url(/images/hero.jpg)" }}>
        <div className="top-ad-text">
          <strong>Your Brand Here</strong>
          <span>Leader in Digital Media</span>
        </div>
        <a href="#" className="btn-red btn-sm">Advertise with Us</a>
        <span className="ad-size">728 × 90</span>
      </div>
    </header>
  );
}
