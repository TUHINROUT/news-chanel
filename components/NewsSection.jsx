import { Clock, Arrow } from "./Icons";

export default function NewsSection({ section }) {
  return (
    <section className="news-section">
      <div className="sec-head">
        <h2 className={section.accent ? "accent" : ""}>{section.title}</h2>
        <a href="#" className="view-all">{section.link} <Arrow /></a>
      </div>
      <div className="cards">
        {section.items.map((it, i) => (
          <a href="#" className="card" key={it.title}>
            <div className="thumb"><img src={`/images/${section.key}${i + 1}.jpg`} alt="" /></div>
            <div className="card-body">
              <span className="cat">{it.tag}</span>
              <h3>{it.title}</h3>
              <span className="time"><Clock /> {it.time}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
