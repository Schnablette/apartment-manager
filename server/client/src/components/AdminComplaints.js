import React from 'react';
import "../styles/AdminComplaints.css";
import AdminNav from "./AdminNav";

class AdminComplaints extends React.Component {
    renderComplaints() {
        
    }

    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    <h1>Maintenance Requests</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Apt #</th>
                                <th>Targ Apt #</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderComplaints()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default AdminComplaints;