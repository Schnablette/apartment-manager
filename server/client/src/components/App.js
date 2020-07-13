import React from 'react';
import '../styles/App.css';
import { Switch, Route } from "react-router"

// components
import NavBarUser from "./NavBarUser";
import UserHome from "./UserHome";
import SiteHome from "./SiteHome";

function App() {
  return (
    <div>
      
      
      <Switch>
        <Route exact path={"/"} component={SiteHome} />
        <Route exact path={"/resident"} component={{nav: NavBarUser, main: UserHome}} />
      </Switch>
    </div>
  );
}

export default App;
