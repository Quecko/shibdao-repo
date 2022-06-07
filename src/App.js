import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Landing/header/Navbar";
import Choose from "./components/ChooseCurrency/Choose";
import Progress from "./components/Progress/Progress";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
