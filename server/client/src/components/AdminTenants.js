import React from 'react';
import "../styles/AdminTenants.css";
import AdminNav from "./AdminNav";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTenants } from "../actions/index";

class AdminTenants extends React.Component {
    componentDidMount() {
        this.props.getTenants()
    }

    renderTenants() {
        return this.props.tenants.map((tenant) => {
            return (
                <tr key={tenant._id}>
                    <td>{tenant.aptNumber}</td>
                    <td>{tenant.tenants}</td>
                    <td>{tenant.name}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    <h1>Complaint Forms</h1>
                    <table>
                        <thead id="tenantTableHead">
                            <tr>
                                <th>Apt #</th>
                                <th># of Tenants</th>
                                <th>Name of Lead Tenant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTenants()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { tenants: state.tenants };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTenants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminTenants);