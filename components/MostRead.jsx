"use client";
import { useState } from "react";
import { mostRead } from "@/data/home";

const tabs = ["24 Hours", "7 Days", "30 Days"];

export default function MostRead() {
  const [active, setActive] = useState(0);
  return (
    <div className="widget">
      <h4>Most Read</h4>
      <div className="tabs" role="tablist">
        {tabs.map((t, i) => (
          <button key={t} role="tab" aria-selected={i === active} className={i === active ? "on" : ""} onClick={() => setActive(i)}>{t}</button>
        ))}
      </div>
      <ol className="most-list">
        {mostRead.map((m, i) => (
          <li key={m}><b>{i + 1}</b><a href="#">{m}</a></li>
        ))}
      </ol>
    </div>
  );
}
