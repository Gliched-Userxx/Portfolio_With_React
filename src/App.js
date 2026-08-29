import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import IgnitionSequence from "./components/IgnitionSequence";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Router>
      {!introDone && (
        <IgnitionSequence onDone={() => setIntroDone(true)} />
      )}
      <div className="app-shell">
        <Navbar />
        <main className="app-main" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
