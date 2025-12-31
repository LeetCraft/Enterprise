import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Logo = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="#1a1a1a"
    strokeWidth="1.25"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Minimalist diamond/rhombus with inner L shape */}
    <polygon points="50,5 95,50 50,95 5,50" />
    <polyline points="30,50 30,70 50,70" strokeLinecap="square" />
  </svg>
);

const App = () => {
  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>

      <div className="brand">
        <h1 className="title">LeetCraft</h1>
        <p className="tagline">SaaS · Infrastructure · Cybersecurity</p>
      </div>

      <div className="contact">
        <p className="contact-label">Contact</p>
        <a href="mailto:hello@leetcraft.net" className="contact-email">
          hello@leetcraft.net
        </a>
      </div>

      <footer className="footer">
        &copy; 2014-2026 LeetCraft 🇫🇷
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
