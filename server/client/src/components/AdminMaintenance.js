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
                                <th>ID</th>
                                <th>Apt #</th>
                                <th>Room</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>234</td>
                            <td>201</td>
                            <td>Bathroom 1</td>
                            <td className="description">Here's a the greta garbo of hongkong. On anyone else taht pink would look bad, but that's the man everyone here wants to talk to.</td>
                            <td><button className="completeButton"></button></td>
                        </tr>
                        <tr>
                            <td>143</td>
                            <td>421</td>
                            <td>Master Bedroom</td>
                            <td className="description">Eleanor knows exactly what's she doing. Clearly delighting in the attention she's getting. Look Philip, it's Rachel Chu. Philip asked with a wink. We headed home soon after you left</td>
                            <td><button className="completeButton"></button></td>
                        </tr>
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