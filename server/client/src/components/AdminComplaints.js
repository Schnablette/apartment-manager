import React from 'react';
import "../styles/AdminComplaints.css";
import AdminNav from "./AdminNav";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getComplaints } from "../actions/index";

class AdminComplaints extends React.Component {
    componentDidMount() {
        this.props.getComplaints()
    }

    renderComplaints() {
        return this.props.complaints.map((complaint) => {
            return (
                <tr key={complaint._id}>
                    <td>{complaint.date}</td>
                    <td>{complaint.aptNumber}</td>
                    <td>{complaint.problemApt}</td>
                    <td>{complaint.type}</td>
                    <td className="description">{complaint.description}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    <h1>Maintenance Requests</h1>
                    <table>
                        <thead id="complaintTableHead">
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

function mapStateToProps(state) {
    return { complaints: state.complaints };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getComplaints }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComplaints);