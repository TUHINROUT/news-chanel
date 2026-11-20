import { Play, Arrow, Clock } from "./Icons";

export default function LiveVideo() {
  return (
    <>
      <div className="widget">
        <h4>Live &amp; Video</h4>
        <a href="#" className="video-thumb" style={{ backgroundImage: "url(/images/live.jpg)" }}>
          <span className="live-badge"><i /> LIVE</span>
          <span className="play"><Play /></span>
        </a>
        <h5>Daily Express Live</h5>
        <p className="muted">Latest news, analysis and in-depth reports.</p>
        <a href="#" className="red-link">Watch Live <Arrow /></a>
      </div>
      <div className="widget">
        <h4>Featured Video</h4>
        <a href="#" className="video-thumb" style={{ backgroundImage: "url(/images/featured.jpg)" }}>
          <span className="play"><Play /></span>
          <span className="duration">5:32</span>
        </a>
        <h5>How Uganda is improving healthcare access</h5>
        <span className="time"><Clock /> 2 days ago</span>
      </div>
    </>
  );
}
