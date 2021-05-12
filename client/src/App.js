import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import FindHikes from './pages/FindHikes';
import PastHikes from './pages/PastHikes';

const App = () => {

    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/PastHikes">Past Hikes</Link>
                </li>
                <li>
                  <Link to="/FindHikes">Find Hikes</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
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
