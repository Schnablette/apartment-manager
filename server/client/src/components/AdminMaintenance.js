import React from 'react';
import "../styles/AdminMaintenance.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AdminNav from "./AdminNav";
import { getMaintenance } from "../actions/index";

class AdminMaintenance extends React.Component {
    componentDidMount() {
        this.props.getMaintenance()
    }

    
    
    renderTable() {
        return this.props.maintenance.map((singleMaintenance) => {
            let statusColor = () => {
                if (singleMaintenance.status == true) {
                    return "var(--main)"
                } else return "var(--bright-light)"
            }

            return (
                <tr>
                    <td>{singleMaintenance.date}</td>
                    <td>{singleMaintenance.aptNumber}</td>
                    <td>{singleMaintenance.room}</td>
                    <td className="description">{singleMaintenance.description}</td>
                    <td><button className="completeButton" style={{backgroundColor: statusColor()}}></button></td>
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
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Apt #</th>
                                <th>Room</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { maintenance: state.maintenance };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMaintenance }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMaintenance);