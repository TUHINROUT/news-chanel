import { Clock } from "./Icons";
import { sideStories } from "@/data/home";

export default function SideStories() {
  return (
    <div className="side-stories">
      {sideStories.map((s) => (
        <a href="#" className="side-story" key={s.title}>
          <img src={s.image} alt="" />
          <div>
            <span className="cat">{s.tag}</span>
            <h3>{s.title}</h3>
            <span className="time"><Clock /> {s.time}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
