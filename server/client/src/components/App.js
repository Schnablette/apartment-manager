import React from 'react';
import '../styles/App.css';
import { Switch, Route } from "react-router"

// components
import UserHome from "./UserHome";
import SiteHome from "./SiteHome";
import AdminReports from "./AdminReports";
import AdminMaintenance from './AdminMaintenance';
import AdminComplaints from './AdminComplaints';
import AdminTenants from './AdminTenants';
import UserComplaint from './UserComplaint';
import UserMaintenance from './UserMaintenance';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={SiteHome} />
        <Route path={"/user"} component={UserHome} />
        <Route path={"/admin/reports"} component={AdminReports} />
        <Route path={"/admin/maintenance"} component={AdminMaintenance} />
        <Route path={"/admin/complaints"} component={AdminComplaints} />
        <Route path={"/admin/tenants"} component={AdminTenants} />
        <Route path={"/user/complaint"} component={UserComplaint} />
        <Route path={"/user/maintenance"} component={UserMaintenance} />
      </Switch>
    </div>
  );
}

export default App;
