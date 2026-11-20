import { Clock, Bookmark } from "./Icons";
import { hero } from "@/data/home";

export default function Hero() {
  return (
    <article className="hero" style={{ backgroundImage: `url(${hero.image})` }}>
      <div className="hero-shade" />
      <span className="tag-badge">{hero.tag}</span>
      <div className="hero-body">
        <h1>{hero.title}</h1>
        <p>{hero.excerpt}</p>
        <div className="hero-meta">
          <span><Clock /> {hero.time}</span>
          <a href="#"><Bookmark /> Read more</a>
        </div>
      </div>
    </article>
  );
}
