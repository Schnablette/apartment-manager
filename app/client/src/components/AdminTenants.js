import React from 'react';
import "../styles/AdminTenants.css";
import AdminNav from "./AdminNav";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTenants, removeTenant } from "../actions/index";
import AddTenantPopUp from './AddTenantPopUp';

class AdminTenants extends React.Component {
    constructor() {
        super()

        this.state = {
            active: false
        }
    }
    componentDidMount() {
        this.props.getTenants()
    }

    componentDidUpdate() {
        this.props.getTenants()
    }

    moveOutTenant(event) {
        let id = event.target.parentElement.parentElement.id
        this.props.removeTenant(id)
    }

    addTenantPopUp() {
        this.setState({active: !this.state.active})
    }

    exitPopUp() {
        this.setState({active: !this.state.active})
    }

    // closePopup() {
    //     if (this.state.active) {
    //         this.setState({active: false})
    //     }
    // }

    renderTenants() {
        return this.props.tenants.map((tenant) => {
            return (
                <tr key={tenant._id} id={tenant._id}>
                    <td>{tenant.aptNumber}</td>
                    <td>{tenant.tenants}</td>
                    <td>{tenant.name}</td>
                    <td><button onClick={this.moveOutTenant.bind(this)}>Move out</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    {this.state.active && <AddTenantPopUp exitPopUp={this.exitPopUp.bind(this)} />}
                    <h1>Tenants</h1>
                    <table>
                        <thead id="tenantTableHead">
                            <tr>
                                <th>Apt #</th>
                                <th># of Tenants</th>
                                <th>Name of Lead Tenant</th>
                                <th><button id="add-tenants" onClick={this.addTenantPopUp.bind(this)}>Move in a new tenant</button></th>
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
    return bindActionCreators({ getTenants, removeTenant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminTenants);