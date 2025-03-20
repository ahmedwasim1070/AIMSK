import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursesPage";
import FeeStructurePage from "./pages/FeeStructurePage";
import AboutPage from "./pages/AboutPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="fee-structure" element={<FeeStructurePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
