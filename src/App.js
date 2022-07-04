import React from "react";
import "./app.scss";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Landing/header/Navbar";
import Choose from "./components/ChooseCurrency/Choose";
import Progress from "./components/Progress/Progress";
import useEagerConnect from './hooks/useEagerConnect'
function App() {
  useEagerConnect()
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/"><Landing /></Route>
        <Route exact path="/choose"><Choose /></Route>
        <Route exact path="/progress"><Progress /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
