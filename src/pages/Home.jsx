import React from "react";
import { Link } from "react-router-dom";
import SheetHeader from "../components/SheetHeader";
import TitleBlock from "../components/TitleBlock";
import "./Home.css";

export default function Home() {
  return (
    <section aria-labelledby="home-title">
      <SheetHeader num="01" eyebrow="Sheet 01 — Elevation" title="About" />

      <div className="home-grid">
        <div className="home-intro">
          <p className="home-kicker">Hi, I'm Rishi —</p>
          <h2 className="home-headline">
            A B.Sc. Computer Science student building things to learn how
            they actually work.
          </h2>
          <p className="home-paragraph">
            I'm currently studying Computer Science at Kishinchand
            Chellaram College in Mumbai, working through Java, Python,
            SQL, and C++ in class — and outside of it, teaching myself by
            building small, complete web projects from scratch.
          </p>
          <p className="home-paragraph">
            I'm still a fresher in the industry, so most of what I know
            comes from finishing things myself: a static site with a
            responsive grid, a game with real input validation, a
            dashboard with working data export. Each project has pushed
            me to pick up a new piece of the stack.
          </p>
          <p className="home-paragraph">
            I'm eager to learn, grow, and gain real experience — looking
            for an internship or entry-level role where I can keep
            building and learn from people who've done this longer than
            I have.
          </p>

          <div className="home-actions">
            <Link className="home-cta" to="/projects">
              View projects →
            </Link>
            <Link className="home-cta home-cta--ghost" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>

        <aside className="home-specs" aria-label="Quick facts">
          <p className="home-specs-title">Specifications</p>
          <dl>
            <div className="home-specs-row">
              <dt>Based in</dt>
              <dd>Mumbai, Maharashtra</dd>
            </div>
            <div className="home-specs-row">
              <dt>Studying</dt>
              <dd>B.Sc. Computer Science, 2024–27</dd>
            </div>
            <div className="home-specs-row">
              <dt>Focus</dt>
              <dd>Java · Python · C++ · SQL</dd>
            </div>
            <div className="home-specs-row">
              <dt>Open to</dt>
              <dd>Internships · Entry-level roles</dd>
            </div>
            <div className="home-specs-row">
              <dt>Certification</dt>
              <dd>Full Stack Java — IT Vedant</dd>
            </div>
          </dl>
        </aside>
      </div>

      <TitleBlock sheetNum="01" sheetTitle="About" />
    </section>
  );
}
