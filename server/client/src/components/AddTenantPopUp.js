import React, { Component } from 'react';
import "../styles/AddTenantPopUp.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTenant } from "../actions/index";

class AddTenantPopUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            aptNumber: "",
            tenants: ""
        }
    }

    updateName(event) {
        this.setState({name: event.target.value}, () => {
            console.log("Name changed to " + this.state.name)
        })
    }

    updateAptNumber(event) {
        this.setState({aptNumber: event.target.value}, () => {
            console.log("AptNumber changed to " + this.state.aptNumber)
        })
    }

    updateTenantsNumber(event) {
        this.setState({tenants: event.target.value}, () => {
            console.log("Number changed to " + this.state.tenants)
        })
    }

    submitTenant(event) {
        event.preventDefault()
        if (this.state.name && this.state.tenants && this.state.aptNumber) {
            this.props.addTenant(this.state.name, this.state.aptNumber, this.state.tenants)
        } else alert("Please fill out all the requested fields.")
        alert("Tenant added")
        this.props.exitPopUp()

    }


    exit() {
        this.props.exitPopUp()
    }

    render() {
        return (
            <div id="addTenantPopup">
                <p className="exit" onClick={this.exit.bind(this)}>X</p>
                <h1>Move In a Tenant</h1>
                <form role="form">
                    <label>Lead Tenant's Name</label>
                    <input type="text" placeholder="Name" className="nameForm" onChange={this.updateName.bind(this)} />
                    <br/>
                    <label>Apartment Number</label>
                    <input type="text" placeholder="Apt #" className="apt" onChange={this.updateAptNumber.bind(this)} />
                    <br/>
                    <label>Number of Tenants</label>
                    <input type="text" placeholder="#" className="apt" onChange={this.updateTenantsNumber.bind(this)} />
                    <button type="text" onClick={this.submitTenant.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTenant }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTenantPopUp);
