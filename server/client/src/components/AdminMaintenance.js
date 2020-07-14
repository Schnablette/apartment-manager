import React from 'react';
import "../styles/AdminMaintenance.css";
import AdminNav from "./AdminNav";

class AdminMaintenance extends React.Component {
    render() {
        return (
            <div>
                <AdminNav />
                <div id="maintenanceModule">
                    <h1>Hello, World</h1>
                </div>
            </div>
        )
    }
}


export default AdminMaintenance;