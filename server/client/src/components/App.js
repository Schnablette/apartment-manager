import React from 'react';
import '../styles/App.css';
import { Switch, Route } from "react-router"

// components
import UserHome from "./UserHome";
import SiteHome from "./SiteHome";
import AdminReports from "./AdminReports";
import AdminMaintenance from './AdminMaintenance';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={SiteHome} />
        <Route path={"/user"} component={UserHome} />
        <Route path={"/admin/reports"} component={AdminReports} />
        <Route path={"/admin/maintenance"} component={AdminMaintenance} />
      </Switch>
    </div>
  );
}

export default App;
