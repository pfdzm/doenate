import React from "react";

import Navigation from "./components/Navigation";

import { DonateProvider } from "./utils/GlobalState";

import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-orange-100 h-screen">
      <Router>
        <DonateProvider>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/stats" component={Stats}></Route>
            <Route exact path="/donate" component={Donate}></Route>
          </Switch>
        </DonateProvider>
      </Router>
    </div>
  );
}

export default App;
