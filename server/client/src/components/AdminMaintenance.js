import React from 'react';
import "../styles/AdminMaintenance.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AdminNav from "./AdminNav";
import { getMaintenance, changeStatus } from "../actions/index";

class AdminMaintenance extends React.Component {
    componentDidMount() {
        this.props.getMaintenance()
    }

    changeColor(event) {
        let id = event.target.parentElement.parentElement.id
        let status = event.target.id
        this.props.changeStatus(id, status)
    }

    componentDidUpdate() {
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
                <tr id={singleMaintenance._id} key={singleMaintenance._id}>
                    <td>{singleMaintenance.date}</td>
                    <td>{singleMaintenance.aptNumber}</td>
                    <td>{singleMaintenance.room}</td>
                    <td className="description">{singleMaintenance.description}</td>
                    <td><button id={singleMaintenance.status.toString()} className="completeButton" onClick={this.changeColor.bind(this)} style={{backgroundColor: statusColor()}}></button></td>
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
                        <thead id="maintenanceTableHead">
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
    return bindActionCreators({ getMaintenance, changeStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMaintenance);