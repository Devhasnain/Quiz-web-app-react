import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import StnPerformance from "./Pages/StnPerformance";
function App() {
  return (
    <Router>
      <div className="container-fluid hero-parent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/yourperformance" element={<StnPerformance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
