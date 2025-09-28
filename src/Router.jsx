import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/skills";
import EducationExperience from "./pages/EducationExperience";

export default function Router() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education&experiences" element={<EducationExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
      </Routes>

  );
}

