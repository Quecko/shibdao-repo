import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Landing/header/Navbar";
import Choose from "./components/ChooseCurrency/Choose";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/choose" element={<Choose />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
