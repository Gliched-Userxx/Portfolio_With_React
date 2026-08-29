import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const SHEETS = [
  { to: "/", label: "About", num: "01" },
  { to: "/projects", label: "Projects", num: "02" },
  { to: "/skills", label: "Skills", num: "03" },
  { to: "/contact", label: "Contact", num: "04" },
];

function CompassMark() {
  return (
    <svg
      className="compass-mark"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="17" cy="17" r="15.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="17" r="1.6" fill="currentColor" />
      <path d="M17 3V9" stroke="currentColor" strokeWidth="1" />
      <path d="M17 25V31" stroke="currentColor" strokeWidth="1" />
      <path d="M3 17H9" stroke="currentColor" strokeWidth="1" />
      <path d="M25 17H31" stroke="currentColor" strokeWidth="1" />
      <path d="M17 3L19 10L17 17L15 10Z" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-label">Menu</span>
      </button>

      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside id="primary-nav" className={`toolbar ${open ? "is-open" : ""}`}>
        <div className="toolbar-brand">
          <CompassMark />
          <div>
            <p className="toolbar-name">Rishi Bhavsar</p>
            <p className="toolbar-role">CS&nbsp;Student</p>
          </div>
        </div>

        <nav aria-label="Portfolio sections">
          <p className="toolbar-eyebrow">Sheet Index</p>
          <ul className="toolbar-list">
            {SHEETS.map((sheet) => (
              <li key={sheet.to}>
                <NavLink
                  to={sheet.to}
                  end={sheet.to === "/"}
                  className={({ isActive }) =>
                    "toolbar-link" + (isActive ? " is-active" : "")
                  }
                  onClick={() => setOpen(false)}
                >
                  <span className="toolbar-link-num">{sheet.num}</span>
                  <span className="toolbar-link-label">{sheet.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="toolbar-footer">
          <p className="toolbar-scale">SCALE 1:1 &nbsp;·&nbsp; REV C</p>
          <a
            className="toolbar-download"
            href={`${process.env.PUBLIC_URL}/Rishi_Bhavsar_Resume.pdf`}
            download
          >
            ↓ Download résumé
          </a>
          <a
            className="toolbar-resume"
            href="mailto:rishimbhavsar@gmail.com"
          >
            Get in touch →
          </a>
        </div>
      </aside>
    </>
  );
}
