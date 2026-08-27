import React from "react";
import SheetHeader from "../components/SheetHeader";
import TitleBlock from "../components/TitleBlock";
import skillGroups from "../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section aria-labelledby="skills-title">
      <SheetHeader num="03" eyebrow="Sheet 03 — Legend" title="Skills" />

      <p className="skills-intro">
        The toolkit I reach for most, grouped the way a legend groups parts
        of a drawing — by what role each one plays.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.code}>
            <div className="skills-group-head">
              <span className="skills-group-code">{group.code}</span>
              <h2 className="skills-group-label">{group.label}</h2>
            </div>
            <ul className="skills-group-list">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="skills-tick" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills-education">
        <p className="skills-education-title">Education</p>
        <ul className="skills-education-list">
          <li>
            <span className="skills-education-degree">
              B.Sc. Computer Science
            </span>
            <span className="skills-education-meta">
              Kishinchand Chellaram College, Mumbai · 2024–2027
            </span>
          </li>
          <li>
            <span className="skills-education-degree">
              Higher Secondary Certificate
            </span>
            <span className="skills-education-meta">
              Brahma Valley, Nashik · 2022–2024
            </span>
          </li>
          <li>
            <span className="skills-education-degree">
              Full Stack Development in Java
            </span>
            <span className="skills-education-meta">
              Certification, IT Vedant
            </span>
          </li>
        </ul>
      </div>

      <TitleBlock sheetNum="03" sheetTitle="Skills" />
    </section>
  );
}
