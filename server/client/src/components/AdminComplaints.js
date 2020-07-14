import React from 'react';
import "../styles/AdminComplaints.css";
import AdminNav from "./AdminNav";

class AdminComplaints extends React.Component {
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


export default AdminComplaints;