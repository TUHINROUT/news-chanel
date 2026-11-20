import { breaking } from "@/data/home";

export default function BreakingNews() {
  const loop = [...breaking, ...breaking];
  return (
    <div className="breaking">
      <div className="container breaking-in">
        <span className="breaking-label">BREAKING NEWS</span>
        <div className="ticker" aria-live="off">
          <div className="ticker-track">
            {loop.map((b, i) => (<span key={i}><i className="dot" />{b}</span>))}
          </div>
        </div>
      </div>
    </div>
  );
}
