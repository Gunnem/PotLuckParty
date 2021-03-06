import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Potluckitems from "./pages/Potluckitems";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Potluckitems} />
          <Route exact path="/potluckitems" component={Potluckitems} />
          <Route exact path="/potluckitems/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
