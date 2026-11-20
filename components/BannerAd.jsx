export default function BannerAd() {
  return (
    <div className="banner-ad" style={{ backgroundImage: "linear-gradient(90deg,#0b2a5b 0%,rgba(11,42,91,.85) 45%,rgba(11,42,91,.35) 100%), url(/images/hero.jpg)" }}>
      <div>
        <strong>Together for a Brighter Future</strong>
        <span>Trusted News. Real Impact.</span>
      </div>
      <a href="#" className="btn-red btn-sm">Advertise With Us</a>
      <span className="ad-size light">970 × 90</span>
    </div>
  );
}
