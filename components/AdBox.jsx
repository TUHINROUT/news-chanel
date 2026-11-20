export default function AdBox() {
  return (
    <div className="ad-box" style={{ backgroundImage: "url(/images/adbg.jpg)" }}>
      <div className="ad-box-in">
        <h3>Grow Your Business with Daily Express</h3>
        <p>Reach a wider audience across Uganda and beyond.</p>
        <a href="#" className="btn-red btn-sm">Advertise Now</a>
      </div>
      <span className="ad-size light">300 × 600</span>
    </div>
  );
}
