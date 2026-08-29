import React from "react";
import "./TitleBlock.css";

export default function TitleBlock({ sheetNum, sheetTitle }) {
  return (
    <footer className="title-block" role="contentinfo">
      <div className="title-block-cell title-block-name">
        <span className="title-block-label">Drawn by</span>
        <span className="title-block-value">Rishi Bhavsar</span>
      </div>
      <div className="title-block-cell">
        <span className="title-block-label">Sheet</span>
        <span className="title-block-value">{sheetNum} / 04</span>
      </div>
      <div className="title-block-cell">
        <span className="title-block-label">Title</span>
        <span className="title-block-value">{sheetTitle}</span>
      </div>
      <div className="title-block-cell">
        <span className="title-block-label">Rev</span>
        <span className="title-block-value">C — 2026</span>
      </div>
    </footer>
  );
}
