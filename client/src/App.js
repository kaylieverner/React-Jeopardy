import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Play from "./pages/Play";
import Practice from "./pages/Practice";
import Leaderboard from "./pages/Leaderboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Grommet } from 'grommet'; 

function App() {
  return (
    <Grommet plain>
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path="/play">
            <Play />
          </Route>
          <Route exact path="/practice">
            <Practice />
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    </Grommet>
  );
}

export default App;
