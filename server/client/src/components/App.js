import React from 'react';
import '../styles/App.css';
import { Switch, Route } from "react-router"

// components
import UserHome from "./UserHome";
import SiteHome from "./SiteHome";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={SiteHome} />
        <Route path={"/user"} component={UserHome} />
      </Switch>
    </div>
  );
}

export default App;
