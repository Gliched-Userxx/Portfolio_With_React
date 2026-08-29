import React, { useEffect, useState } from "react";
import "./IgnitionSequence.css";

const BOOT_LINE = "> booting rishi.dev — compiling skills.json ...";
const LIGHT_COUNT = 5;
const TRACK_LINES = 6;

// Original line-art race car silhouette (schematic style, no real team/livery).
function BlueprintCar() {
  return (
    <svg
      viewBox="0 0 300 90"
      className="race-car-svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* rear wing */}
      <path d="M18 30 L18 14 L52 14 L52 30" fill="none" strokeWidth="3" />
      <line x1="34" y1="30" x2="34" y2="14" strokeWidth="2" />
      {/* body */}
      <path
        d="M20 58
           C20 46 34 40 55 40
           L120 38
           C150 30 190 30 215 38
           L250 44
           C266 46 276 52 280 58
           L280 62
           L20 62 Z"
        fill="none"
        strokeWidth="3"
      />
      {/* cockpit */}
      <path d="M118 40 L134 22 L168 22 L184 38" fill="none" strokeWidth="2.5" />
      {/* front nose + wing */}
      <path d="M250 44 L292 40 L292 52 L262 56" fill="none" strokeWidth="3" />
      <line x1="270" y1="40" x2="270" y2="52" strokeWidth="2" />
      {/* side vent */}
      <path d="M150 44 L172 44 L164 56 L146 56 Z" fill="none" strokeWidth="1.6" />
      {/* wheels */}
      <circle cx="66" cy="66" r="17" fill="none" strokeWidth="3.5" />
      <circle cx="66" cy="66" r="6" fill="none" strokeWidth="2" />
      <circle cx="236" cy="66" r="17" fill="none" strokeWidth="3.5" />
      <circle cx="236" cy="66" r="6" fill="none" strokeWidth="2" />
      {/* ground clearance dash */}
      <line x1="20" y1="70" x2="280" y2="70" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
    </svg>
  );
}

export default function IgnitionSequence({ onDone }) {
  const [phase, setPhase] = useState("type"); // type -> lights -> wait-for-input -> race -> exit
  const [typedLength, setTypedLength] = useState(0);
  const [skip, setSkip] = useState(false);

  // Respect reduced-motion: skip the whole thing instantly.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      onDone();
    }
  }, [onDone]);

  // Typewriter effect for the boot line.
  useEffect(() => {
    if (phase !== "type" || skip) return;
    if (typedLength >= BOOT_LINE.length) {
      const t = setTimeout(() => setPhase("lights"), 260);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTypedLength((n) => n + 1), 22);
    return () => clearTimeout(t);
  }, [phase, typedLength, skip]);

  // Lights phase: after all 5 lights are lit + a beat, go dark and wait for the user.
  useEffect(() => {
    if (phase !== "lights" || skip) return;
    const lightsOnDuration = LIGHT_COUNT * 260 + 500;
    const t = setTimeout(() => setPhase("wait-for-input"), lightsOnDuration);
    return () => clearTimeout(t);
  }, [phase, skip]);

  // Wait-for-input phase: screen is dark, animation pauses indefinitely until
  // the user presses spacebar/enter (or taps, on touch devices) to launch.
  useEffect(() => {
    if (phase !== "wait-for-input" || skip) return;

    function handleKeyDown(e) {
      if (e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setPhase("race");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, skip]);

  function handleLaunch() {
    if (phase === "wait-for-input" && !skip) {
      setPhase("race");
    }
  }

  // Race phase: car drives across the screen for 2s while the portfolio fades
  // in behind it, then we cut to exit.
  useEffect(() => {
    if (phase !== "race" || skip) return;
    const t = setTimeout(() => setPhase("exit"), 2000);
    return () => clearTimeout(t);
  }, [phase, skip]);

  // Exit phase: glitch-wipe, then unmount via onDone.
  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(onDone, 360);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  function handleSkip() {
    setSkip(true);
    onDone();
  }

  if (skip) return null;

  const showGantry =
    phase === "lights" || phase === "wait-for-input" || phase === "race" || phase === "exit";
  const showWaitPrompt = phase === "wait-for-input";
  const showRace = phase === "race" || phase === "exit";

  return (
    <div
      className={`ignition ${phase === "exit" ? "ignition--exit" : ""}`}
      role="presentation"
      aria-hidden="true"
      onClick={handleLaunch}
    >
      {phase !== "race" && phase !== "exit" && (
        <button className="ignition-skip" onClick={handleSkip} type="button">
          Skip →
        </button>
      )}

      {!showRace && (
        <div className="ignition-stage">
          <p className="ignition-terminal">
            {BOOT_LINE.slice(0, typedLength)}
            <span className="ignition-cursor" />
          </p>

          {showGantry && (
            <div
              className={`ignition-gantry ${
                phase === "wait-for-input" ? "ignition-gantry--out" : ""
              }`}
            >
              {Array.from({ length: LIGHT_COUNT }).map((_, i) => (
                <span
                  key={i}
                  className="ignition-light"
                  style={{ animationDelay: `${i * 260}ms` }}
                />
              ))}
            </div>
          )}

          {showWaitPrompt && (
            <p className="ignition-wait-prompt">Press SPACE or ENTER to launch</p>
          )}
        </div>
      )}

      {showRace && (
        <div className="race-track">
          {Array.from({ length: TRACK_LINES }).map((_, i) => (
            <span
              key={i}
              className="race-speedline"
              style={{
                top: `${12 + i * 12}%`,
                animationDelay: `${i * 35}ms`,
              }}
            />
          ))}
          <div className="race-lane" />
          <div className="race-car">
            <BlueprintCar />
          </div>
          <div className="race-glitch-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
    </div>
  );
}
