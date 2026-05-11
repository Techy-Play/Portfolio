"use client";
import { useEffect, useState } from "react";

export default function TypingText() {
  const roles = [
    "Full-Stack Developer",
    "IoT Enthusiast",
    "Data Science Explorer",
    "Cybersecurity Learner",
    "AI/ML Enthusiast",
  ];
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let speed = deleting ? 40 : 80;

    if (!deleting && charIdx === current.length) speed = 2000;
    if (deleting && charIdx === 0) speed = 400;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setText(current.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return (
    <p className="hero-title">
      {text}
      <span style={{ color: "var(--neon-blue)", animation: "pulse 1s infinite" }}>|</span>
    </p>
  );
}
