import React from 'react';
import "../styles/AdminTenants.css";
import AdminNav from "./AdminNav";

class AdminTenants extends React.Component {
    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    <h1>Hello, World</h1>
                </div>
            </div>
        )
    }
}


export default AdminTenants;