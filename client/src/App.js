import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import FindHikes from './pages/FindHikes';
import PastHikes from './pages/PastHikes';
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/PastHikes">
                <PastHikes />
              </Route>
              <Route path="/FindHikes">
                <FindHikes />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  
}

export default App;
