import React, { Component } from 'react';
import "../styles/AddTenantPopUp.css";

class AddTenantPopUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            aptNumber: "",
            tenants: ""
        }
    }

    updateName() {

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
                    <input type="text" placeholder="Apt #" className="apt" onChange={this.updateName.bind(this)} />
                    <br/>
                    <label>Number of Tenants</label>
                    <input type="text" placeholder="#" className="apt" onChange={this.updateName.bind(this)} />
                </form>
            </div>
        )
    }
}

export default AddTenantPopUp;