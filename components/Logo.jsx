export default function Logo({ footer = false }) {
  return (
    <a href="#" className={footer ? "logo logo-footer" : "logo"} aria-label="Daily Express home">
      <img src="/images/logo.png" alt="Daily Express" className="logo-img" />
      <span className="logo-tag">ACCURATE, FAST &amp; RELIABLE</span>
    </a>
  );
}
