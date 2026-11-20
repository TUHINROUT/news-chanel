"use client";
import { useState } from "react";
import { Mail, Arrow } from "./Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <div className="widget newsletter">
      <div className="nl-head">
        <span className="nl-icon"><Mail /></span>
        <h4>Get the Daily Express Briefing</h4>
      </div>
      <p className="muted">The biggest stories from Uganda, East Africa and the world delivered to your inbox.</p>
      <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn-red block" onClick={() => setEmail("")}>Subscribe <Arrow /></button>
    </div>
  );
}
