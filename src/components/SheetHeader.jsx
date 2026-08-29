import React from "react";
import "./SheetHeader.css";

export default function SheetHeader({ num, eyebrow, title }) {
  return (
    <header className="sheet-header">
      <span className="sheet-header-num">{num}</span>
      <div>
        <p className="sheet-header-eyebrow">{eyebrow}</p>
        <h1 className="sheet-header-title">{title}</h1>
      </div>
    </header>
  );
}
